let productQuantity = 0;
let slideImage = 1;
const productQuantityField = document.querySelector(".quantity");

function handleQuanityChangeIncrease() {
  if (productQuantity >= 0) {
    productQuantity = productQuantity + 1;
    productQuantityField.innerHTML = productQuantity;
  }
  console.log(productQuantity);
}
function handleQuanityChangeDecrease() {
  console.log("button clicked");
  if (productQuantity > 0) {
    productQuantity -= 1;
    productQuantityField.innerHTML = productQuantity;
  }
  console.log(productQuantity);
}

function openImageDialog() {
  const dialog = document.getElementById("dialog");
  dialog.showModal();
  dialog.classList.add("dialog-open");
  console.log("aslkdj");
}

function closeDialog() {
  const dialog = document.getElementById("dialog");
  dialog.close();
  dialog.classList.remove("dialog-open");
}

function handleNextImage() {
  const mainImageDialog = document.getElementById("main-image-dialog");
  console.log(mainImageDialog);
  if (slideImage < 4) {
    slideImage += 1;
    mainImageDialog.setAttribute(
      "src",
      `./images/image-product-${slideImage}.jpg`
    );
  } else {
    slideImage = 1;
    mainImageDialog.setAttribute(
      "src",
      `./images/image-product-${slideImage}.jpg`
    );
  }
}
function handlePrevImage() {
  const mainImageDialog = document.getElementById("main-image-dialog");
  if (slideImage > 1) {
    slideImage -= 1;
    mainImageDialog.setAttribute(
      "src",
      `./images/image-product-${slideImage}.jpg`
    );
  } else {
    slideImage = 4;
    mainImageDialog.setAttribute(
      "src",
      `./images/image-product-${slideImage}.jpg`
    );
  }
}

let isOpen = false;

function showCart() {
  const cartOverlay = document.querySelector(".cart-overlay");
  console.log("toggle");
  if (isOpen) {
    cartOverlay.style.animation = "CartOut 1s";
    cartOverlay.style.visibility = "hidden";
    isOpen = false;
  } else {
    cartOverlay.style.transition = "all 1s";
    cartOverlay.style.animation = "CartIn 1s";
    cartOverlay.style.visibility = "visible";
    isOpen = true;
  }
}

// Cart function
function handleAddToCart() {
  const productQuantities = document.querySelector(".quantities");
  const productTotal = document.querySelector(".product-total");
  const productInCart = document.querySelector(".product-in-cart");
  const cartEmptyElement = document.querySelector(".cart-empty");
  const cartBadge = document.querySelector(".cart-badge");
  if (productQuantity >= 1) {
    productInCart.style.display = "revert";
    cartEmptyElement.style.display = "none";
    cartBadge.style.visibility = "visible";
  } else {
    productInCart.style.display = "none";
    cartEmptyElement.style.display = "revert";
    cartBadge.style.visibility = "hidden";
  }
  cartBadge.innerHTML = productQuantity;
  productQuantities.innerHTML = productQuantity;
  productTotal.textContent = `$ ${productQuantity * 125}`;
}

function deleteCartProduct() {
  productQuantity = 0;
  handleAddToCart();
}
let isDialogOpen = false;
function handleDialogToggle() {
  const dialogElement = document.querySelector(".dialog");
  if (isDialogOpen) {
    console.log("close");
    dialogElement.style.visibility = "hidden";
    dialogElement.style.animation = "MenuOut 1s";
    isDialogOpen = false;
  } else {
    console.log("open");
    dialogElement.style.animation = "MenuIn 1s";
    dialogElement.style.visibility = "visible";
    isDialogOpen = true;
  }
}

let currImagePostion = 1;

function nextImage() {
  const mainImageDialog = document.getElementById("main-image");
  if (currImagePostion < 4) {
    currImagePostion += 1;
    mainImageDialog.setAttribute(
      "src",
      `./images/image-product-${currImagePostion}.jpg`
    );
  }
}

function prevImage() {
  const mainImageDialog = document.getElementById("main-image");
  if (currImagePostion > 4) {
    currImagePostion -= 1;
    mainImageDialog.setAttribute(
      "src",
      `./images/image-product-${currImagePostion}.jpg`
    );
  }
}

let isMenuOpen = false;
function handleMenu() {
  const menuElement = document.querySelector(".mobile-menu");
  if (isMenuOpen) {
    menuElement.style.visibility = "hidden";
    menuElement.style.width = "0vw";
    menuElement.style.transition = "all 1s";
    menuElement.style.animation = "MenuOut 1s";

    isMenuOpen = false;
  } else {
    menuElement.style.transition = "all 1s";
    menuElement.style.animation = "MenuIn 1s";
    menuElement.style.visibility = "visible";
    menuElement.style.width = "90vw";
    isMenuOpen = true;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".thumbnails-container img");
  const mainImage = document.getElementById("main-image");
  const closeDialogBtc = document.querySelector(".close-dialog");
  const productIncrease = document.querySelector(".increase-quantity");
  const productDecrease = document.querySelector(".decrease-quantity");
  const prevBtn = document.querySelector(".dialog-image-navigation-prev-btn");
  const nextBtn = document.querySelector(".dialog-image-navigation-next-btn");
  const cartBtn = document.querySelector(".cart");
  const deleteCartProductBtn = document.querySelector(".delete-cart-product");
  const addToCartBtn = document.querySelector(".add-to-cart-btn");
  const mainImages = document.querySelectorAll(".main-image");

  document
    .querySelector(".open-menu-btn")
    .addEventListener("click", handleMenu);
  document
    .querySelector(".close-menu-btn")
    .addEventListener("click", handleMenu);
  console.log(mainImages);
  document.querySelector(".next-image").addEventListener("click", nextImage);
  document.querySelector(".prev-image").addEventListener("click", prevImage);
  addToCartBtn.addEventListener("click", () => handleAddToCart());
  cartBtn.addEventListener("click", showCart);
  deleteCartProductBtn.addEventListener("click", deleteCartProduct);
  nextBtn.addEventListener("click", handleNextImage);
  prevBtn.addEventListener("click", handlePrevImage);
  mainImage.addEventListener("click", () => handleDialogToggle());
  productIncrease.addEventListener("click", () =>
    handleQuanityChangeIncrease()
  );
  productDecrease.addEventListener("click", () =>
    handleQuanityChangeDecrease()
  );
  closeDialogBtc.addEventListener("click", () => handleDialogToggle());
  //Image Change

  thumbnails.forEach((thumbnail) =>
    thumbnail.addEventListener("click", (e) => handleImageChange(e))
  );
  let selectedImage = 0;
  function handleImageChange(e) {
    selectedImage = e.target.id;
    mainImage.setAttribute("src", `./images/image-product-${e.target.id}.jpg`);
    thumbnails.forEach((thumbnail) => {
      if (thumbnail.id == selectedImage) {
        thumbnail.classList.add("selected");
      } else {
        thumbnail.classList.remove("selected");
      }
    });
  }
});
