import product1 from "../data/baby-boy-suit.json" assert { type: "json" };
import product2 from "../data/baby-boy-clothes.json" assert { type: "json" };
import product3 from "../data/baby-boy-coat.json" assert { type: "json" };
import product4 from "../data/baby-girl-clothes.json" assert { type: "json" };
import product5 from "../data/baby-girl-coat.json" assert { type: "json" };
import product6 from "../data/baby-girl-dress.json" assert { type: "json" };
import product7 from "../data/baby-girl-suit.json" assert { type: "json" };
import product8 from "../data/baby-girl-trousers.json" assert { type: "json" };

const products = product1.concat(
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8
);

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

const shopProducts = id("shop-products");

const formatPrice = (price) => new Intl.NumberFormat().format(price);

if (window.location.href.indexOf("store.html") !== -1) {
    shopProducts.innerHTML = products
        .map(
            (e, id) =>
                `
        <div class="shop-product">
            <a href="../html/article-detail.html">
                <div class="shop-product__img-wrapper">
                    <img src="${e.image[0]}" alt="" />
                </div>
                <div class="shop-product__content">
                    <div class="shop-product__name">${e.title}</div>
                    <p class="shop-product__description"></p>
                </div>
            </a>
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
            <div class="shop-product__btns">
                <div class="shop-product__btn">
                    <ion-icon 
                        class="heart-icon" 
                        name="heart-outline" 
                    ></ion-icon>
                </div>
                <div class="shop-product__btn">
                    <ion-icon class="cart-icon" name="cart-outline"></ion-icon>
                </div>
            </div>            
        </div>
        `
        )
        .join("");
}
