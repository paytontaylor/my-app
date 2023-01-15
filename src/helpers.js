function choice(items){
    let rand_idx = Math.floor(Math.random() * items.length)
    return items[rand_idx]
}

function remove(item, items) {
    for (let i = 0; i < items.length; i++) {
      if (items[i] === item) {
        return [...items.slice(0, i), ...items.slice(i + 1)]
      }
    }
  }


export {choice, remove}