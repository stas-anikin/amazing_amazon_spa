console.log('Connected')
const BASE_URL = `http://localhost:3000/api/v1`;
export const Session = {
    create(params) {
      // params should look like { email: 'johnsnow@gmail.com', password: 'supersecret' }
      return fetch(`${BASE_URL}/session`, {
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include', // allows cookies to be recieved and sent from this request
        method: 'POST',
        body: JSON.stringify(params)
      }).then((res) => {
        return res.json();
      })
    }
  }
export const Product= {
    index() {
        return fetch(`${BASE_URL}/products`,{
          headers: {
            'Cache-Control': 'no-cache'
          }})
          .then(res => {
            // res object has a method .json() that will parse the body of response and return it as json
            // console.log(res);
            return res.json();
          })
      },

    show(id) {
        return fetch(`${BASE_URL}/products/${id}`)
            .then(res => res.json())
            .catch(console.error)
    },
    create(params) {
        return fetch(`${BASE_URL}/products`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json())
        .catch(console.error)
    }

}

// console.log(document.querySelector('.product-list')); //👈🏻 like this 
// Session.create({email:'js@winterfell.gov', password:'123'})

// function loadProducts() {
//     // console.log('In functions')
//     Product.index().then(products => {
//         // console.log(products)
//         const productContainer = document.querySelector('ul.product-list');
//         productContainer.innerHTML =products.map(product => {
//             // console.log(product)
//             return `
//     <li>
//         <a class='product-link' data-id=${product.id} href=''>
//             ${product.id} - ${product.title}
//         </a>
//     </li>
//     `
//         }).join('')
//     })
// }
// loadProducts();
// // const productContainer = document.querySelector('ul.product-list');
// // // console.log(productContainer)
// // productContainer.addEventListener('click', (event) => {
// //     event.preventDefault();
// //     const productElement = event.target
// //     if (productElement.matches('a.product-link')) {
// //         // console.log(productElement.dataset.id)
// //         renderProductShow(productElement.dataset.id)
// //     }
// // })
// // Function to display Show Page of Product
// function renderProductShow(id) {
//     Product.show(id).then(product => {
//         // console.log(`${product.id} - ${product.title}`)
//         const showPage = document.querySelector('.page#product-show')
//         const showPageHTML = `
//         <h2>${product.title}</h2>
//         <p>${product.description}</p>
//         `
//         showPage.innerHTML = showPageHTML;
//         navigateTo('product-show')
//     })
// }

// // Navigation Bar

// // function navigateTo(pageId) {
// //     document.querySelectorAll('.page').forEach(node => {
// //         node.classList.remove('active')
// //     })
// //     document.querySelector(`.page#${pageId}`).classList.add('active');
// // }
// // // Adding Navigation
// // const navbar = document.querySelector('nav.navbar')
// // navbar.addEventListener('click', (event) => {
// //     event.preventDefault();
// //     const node = event.target;
// //     const page = node.dataset.id;
// //     if (page){
// //         console.log(page);
// //         navigateTo(page)
// //     }
// // }) 

// const newProductForm=document.querySelector('#new-product-form');
// newProductForm.addEventListener('submit',(event)=>{
//     event.preventDefault();
//     const form=event.currentTarget
//     console.log(form);
//     const fd=new FormData(form)
//     const newProductParams={
//         title:fd.get('title'),
//         description:fd.get('description'),
//         price:fd.get('price')
//     }
//     console.log(newProductParams);
//     Product.create(newProductParams).then(data=>{
//         console.log(data)
//         // loadProducts();
//         renderProductShow(data.id)
//     })
//     .catch(err=>console.log(err))
// })