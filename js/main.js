// Storing all the store items and filter buttons
const shopItems = document.querySelectorAll('.store-item')

function catagoryFilter (catagory) {
  shopItems.forEach(item => {
    // Hiding all the items
    item.style.display = 'none'
    // if the filter matches the catagory diplay that catagory items
    if (item.dataset.item === catagory.dataset.filter) {
      item.style.display = 'block'
    }
  })
}
