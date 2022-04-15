import product from "../data/baby-boy-suit.json" assert { type: "json" };

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

const hotProducts = id("shop-products");

const formatPrice = (price) => new Intl.NumberFormat().format(price);

hotProducts.innerHTML = product
    .map(
        (e) =>
            `
        <div class="shop-product">
            <div class="shop-product__img-wrapper">
                <img src="${e.image[0]}" alt="" />
            </div>
            <div class="shop-product__content">
                <div class="shop-product__name">${e.title}</div>
                <p class="shop-product__description"></p>
            </div>
            <div class="shop-product__row">
                <div class="shop-product__rating d-flex">
                    <div
                        class="shop-product__rating-star d-flex align-items-center pe-2"
                    >
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                    </div>
                    <span class="shop-product__rating-count"
                        >(${Math.floor(Math.random() * 1000) + 100})</span
                    >
                </div>
                <div class="shop-product__price">${formatPrice(e.price)}đ</div>
            </div>
            <div class="shop-product__label">Yêu thích</div>
        </div>
        `
    )
    .join("");
