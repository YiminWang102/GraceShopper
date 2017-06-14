import React from 'react'

export default function AddProduct({handleNewProductSubmit}) {
  return (
    <form onSubmit={handleNewProductSubmit}>
      <input name="name" type="text" placeholder="Meme Name" />
      <input name="description" type="text" placeholder="Description" />
      <input name="inventory" type="text" placeholder="Number in Stock" />
      <input name="imageUrl" type="text" placeholder="Image URL" />
      <input name="price"type="text" placeholder="Price" />
      <input name="tags" type="text" placeholder="Tags" />
      <button type="submit"> Add a New Meme </button>
    </form>
  )
} 
