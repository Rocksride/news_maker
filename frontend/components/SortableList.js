const move = (items, oldIndex, newIndex) => {
  const itemRemovedArray = [
    ...items.slice(0, oldIndex),
    ...items.slice(oldIndex + 1, items.length)
  ];

  return [
  ...itemRemovedArray.slice(0, newIndex),
  items[oldIndex],
  ...itemRemovedArray.slice(newIndex, itemRemovedArray.length)
  ]
}
export default {
  props: {
    itemClass: {
      default: 'sortable-list-item'
    },
    handleClass: {
      default: 'sortable-list-handle'
    },
    value: {
      required: true
    }
  },
  provide() {
    return {
      sortableListItemClass: this.itemClass,
      sortableListHandleClass: this.handleClass,
    }
  },
  render() {
    return this.$scopedSlots.default({
      items: this.value
    });
  },
  mounted() {
    const Sortable = require('sortablejs')
    new Sortable(this.$el,
    {
      draggable: `.${this.itemClass}`,
      handle: `.${this.handleClass}`,
      // delay: 200,
      animation: 200,
      ghostClass: "sortable-ghost",  // Class name for the drop placeholder
      chosenClass: "sortable-chosen",  // Class name for the chosen item
      dragClass: "sortable-drag", 
      onEnd: ({ oldIndex, newIndex }) => {
        console.log({oldIndex, newIndex})
        this.$emit('input', move(this.value, oldIndex, newIndex))
      },
      // store: {
      //   /**
      //    * Get the order of elements. Called once during initialization.
      //    * @param   {Sortable}  sortable
      //    * @returns {Array}
      //    */
      //   get: function (sortable) {
      //     var order = localStorage.getItem(sortable.options.group.name);
      //     return order ? order.split('|') : [];
      //   },

      //   /**
      //    * Save the order of elements. Called onEnd (when the item is dropped).
      //    * @param {Sortable}  sortable
      //    */
      //   set: function (sortable) {
      //     var order = sortable.toArray();
      //     localStorage.setItem(sortable.options.group.name, order.join('|'));
      //   }
      // }
    })
  }
}