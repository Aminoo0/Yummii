let inner = document.querySelector('#inner');
let innerInput = document.querySelector('#innerInput');
let cate = document.querySelector('#cate');
let area = document.querySelector('#area');
let ingr = document.querySelector('#ingr');
let search = document.querySelector('#search');
let contact = document.querySelector('#contact');
let formBtn = document.querySelector('#formBtn');
let flag;

$(document).ready(() => {
    $('#loading').fadeOut(1000)
    mainSideApi();

})

// navBar
function openNavbar() {
    $('.sideBar').animate({ left: 0 }, 500);
    $('.navIcon').removeClass('sliders-x')
    $('.navIcon').addClass('fa-x')
    $('ul li').slideDown(400)
}

function closeNavbar() {
    let x = $('.mainbar').outerWidth()
    $('.sideBar').animate({ left: -x }, 500)
    $('.navIcon').addClass('fa-sliders')
    $('.navIcon').removeClass('fa-x')
    $('ul li').slideUp(400)
}
closeNavbar();

$('.navIcon').click(function () {
    if ($('.sideBar').css('left') == '0px') {
        closeNavbar()
    } else {
        openNavbar()
    }
})

$('#navlogo').click(() => {
    $('#loading').fadeIn(500)
    $('#loading').fadeOut(500)
    closeNavbar()
    mainSideApi()
})
// fristPageApi //
async function mainSideApi() {
    let mainApi = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
    let result = await mainApi.json()
    let finalMeals = result.meals
    displayMainSide(finalMeals)
}

function displayMainSide(finalMeals) {

    let box = `
   <div class='w-full flex justify-center'>
   <h1 class='text-white p-3 bg-slate-400 rounded-xl text-3xl hover:text-slate-300 hover:tracking-widest duration-500'>Yummi For Recipes</h1>
   </div>
    ${finalMeals.map((ele) => {
        return `
        <div onclick='mealDetails(${ele.idMeal})' class="mealImg cursor-pointer overflow-hidden gap-x-10 relative w-full lg:w-1/5 mx-auto">
        <img class="w-full rounded-lg" src="${ele.strMealThumb}" alt="">
        <div class="layer rounded-lg cursor-pointer">
            <h2 class="text-3xl font-bold text-gray-900 ps-7">${ele.strMeal}</h2>
        </div>
    </div>`
    }).join(' ')}`

    inner.innerHTML = box;
}

// mealDetails //

async function mealDetails(id) {
    $('#loading').fadeIn(500)
    $('#loading').fadeOut(500)
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    let result = await data.json();
    let finalId = result.meals
    displayMealDetails(finalId[0])
    console.log(finalId[0]);
}

function displayMealDetails(details) {
    console.log(details);
    let box = `
    <section class="text-white"> 
    <div class="container mx-auto flex flex-col xl:flex-row">
        <div class="w-full flex flex-col items-center justify-center xl:w-1/2 xl:justify-start xl:items-start xl:p-10">
            <img class="w-full rounded-lg" src="${details.strMealThumb}" alt="">
            <h2 class="text-3xl font-bold py-4">${details.strMeal}</h2>
        </div>
        <div class="w-full flex flex-col items-start justify-start xl:w-1/2 xl:p-10">
            <h2 class="text-5xl font-bold pb-2 mt-5 xl:mb-10">Instructions</h2>
            <p class="text-xl text-left py-5">${details.strInstructions}</p>
                <p class="font-bold text-3xl py-5">aria : <span class='font-semibold'>${details.strArea}</span></p>
                <p class="font-bold text-3xl">Category : <span class='font-semibold'>${details.strCategory}</span></p>
                <h2 class='font-bold text-3xl my-4'>Recipes :</h2>
                <div class='flex flex-wrap gap-x-2 text-gray-900'>
                <span class='my-5 p-1 rounded-lg bg-slate-300'>${details.strMeasure1} ${details.strIngredient1}</span>
                <span class='my-5 p-1 rounded-lg bg-slate-300'>${details.strMeasure2} ${details.strIngredient2}</span>
                <span class='my-5 p-1 rounded-lg bg-slate-300'>${details.strMeasure3} ${details.strIngredient3}</span>
                <span class='my-5 p-1 rounded-lg bg-slate-300'>${details.strMeasure4} ${details.strIngredient4}</span>
                <span class='my-5 p-1 rounded-lg bg-slate-300'>${details.strMeasure5} ${details.strIngredient5}</span>
                <span class='my-5 p-1 rounded-lg bg-slate-300'>${details.strMeasure6} ${details.strIngredient6}</span>
                <span class='my-5 p-1 rounded-lg bg-slate-300'>${details.strMeasure7} ${details.strIngredient7}</span>
                <span class='my-5 p-1 rounded-lg bg-slate-300'>${details.strMeasure8} ${details.strIngredient8}</span>
                <span class='my-5 p-1 rounded-lg bg-slate-300'>${details.strMeasure9} ${details.strIngredient9}</span>
                <span class='my-5 p-1 rounded-lg bg-slate-300'>${details.strMeasure10} ${details.strIngredient10}</span>
                <span class='my-5 p-1 rounded-lg bg-slate-300'>${details.strMeasure11} ${details.strIngredient11}</span>
                <span class='my-5 p-1 rounded-lg bg-slate-300'>${details.strMeasure12} ${details.strIngredient12}</span>
                <span class='my-5 p-1 rounded-lg bg-slate-300'>${details.strMeasure13} ${details.strIngredient13}</span>
                <span class='my-5 p-1 rounded-lg bg-slate-300'>${details.strMeasure14} ${details.strIngredient14}</span>
                <span class='my-5 p-1 rounded-lg bg-slate-300'>${details.strMeasure15} ${details.strIngredient15}</span>
                <span class='my-5 p-1 rounded-lg bg-slate-300'>${details.strMeasure16} ${details.strIngredient16}</span>
                <span class='my-5 p-1 rounded-lg bg-slate-300'>${details.strMeasure17} ${details.strIngredient17}</span>
                <span class='my-5 p-1 rounded-lg bg-slate-300'>${details.strMeasure18} ${details.strIngredient18}</span>
                <span class='my-5 p-1 rounded-lg bg-slate-300'>${details.strMeasure19} ${details.strIngredient19}</span>
                <span class='my-5 p-1 rounded-lg bg-slate-300'>${details.strMeasure20} ${details.strIngredient20}</span>
                </div>
                <div class='flex gap-3'>
                <button class="bg-green-700 p-2 rounded-lg"><a target='_blank' href='${details.strSource}' class='text-3xl my-4'>Source</a><button>
                <button class="bg-red-800 p-2 rounded-lg"><a target='_blank' href='${details.strYoutube}' class='text-3xl my-4'>Youtube</a><button>
                <div>
        </div>
    </div>
</section>
    `
    inner.innerHTML = box;
    console.log(formBtn);
}

// displayCategories //

async function Categories() {
    $('#loading').fadeIn(500)
    $('#loading').fadeOut(500)
    let data = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    let result = await data.json();
    final = result.categories;
    displayCategories(final)
    // console.log(final);
}

function displayCategories(Category) {
    let box = `
    ${Category.map((ele) => {
        return `<div onclick='categoryId("${ele.strCategory}")' class="mealImg cursor-pointer overflow-hidden relative w-full lg:w-1/3 xl:w-1/5 mx-auto">
        <img class="w-full rounded-lg" src="${ele.strCategoryThumb}" alt="">
        <div class="layer flex-col text-center overflow-hidden rounded-lg">
            <h2 class="text-3xl font-bold text-gray-900">${ele.strCategory}</h2>
            <p class="text-sm font-bold text-gray-900">${ele.strCategoryDescription.slice(0, 120)}</p>
        </div>
    </div>`
    }).join(' ')}`
    inner.innerHTML = box;
}

cate.addEventListener('click', function () {
    closeNavbar();
    Categories()
    innerInput.innerHTML = '';
})

// CategoryDetails //

async function categoryId(mealName) {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealName}`)
    let result = await data.json();
    let finalData = result.meals
    // console.log(finalData);
    displayCategoriesMealsAndDetails(finalData)
}

function displayCategoriesMealsAndDetails(finalData) {
    $('#loading').fadeIn(500)
    $('#loading').fadeOut(500)
    // console.log(finalData);
    let box = `
    ${finalData.map((ele) => {
        return `<div onclick="mealDetails(${ele.idMeal})" class="mealImg cursor-pointer overflow-hidden relative w-full lg:w-1/3 xl:w-1/5 mx-auto">
        <img class="w-full rounded-lg" src="${ele.strMealThumb}" alt="">
        <div class="layer flex-col justify-center text-center overflow-hidden rounded-lg">
            <h2 class="text-3xl font-bold text-gray-900">${ele.strMeal}</h2>
        </div>
    </div>`
    }).join(' ')}`
    inner.innerHTML = box;
}

// area //

async function areaApi() {
    $('#loading').fadeIn(500)
    $('#loading').fadeOut(500)
    let data = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    let result = await data.json();
    let finalData = result.meals;
    displayArea(finalData);
    // console.log(finalData);
}

area.addEventListener('click', function () {
    closeNavbar()
    areaApi()
    innerInput.innerHTML = '';
})

function displayArea(finalData) {
    let box = `
    ${finalData.map((ele) => {
        return `<div onclick='getAreaName("${ele.strArea}")' class="w-full md:w-1/3 lg:w-1/5 mx-auto">
        <i class="fa-solid text-sky-200 fa-house-laptop fa-4x"></i>
        <div class="">
            <h2 class="text-3xl font-bold text-sky-200">${ele.strArea}</h2>
        </div>
    </div>`
    }).join(' ')}`
    inner.innerHTML = box;
};

async function getAreaName(areaName) {
    $('#loading').fadeIn(500)
    $('#loading').fadeOut(500)
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`);
    let result = await data.json();
    let finalData = result.meals;
    displayAreaMeals(finalData)
    // console.log(finalData);
}

function displayAreaMeals(finalData) {
    let box = `
    ${finalData.map((ele) => {
        return `<div onclick="mealDetails(${ele.idMeal})" class="mealImg cursor-pointer overflow-hidden relative w-full lg:w-1/3 xl:w-1/5 mx-auto">
        <img class="w-full rounded-lg" src="${ele.strMealThumb}" alt="">
        <div class="layer flex-col justify-center text-center overflow-hidden rounded-lg">
            <h2 class="text-3xl font-bold text-gray-900">${ele.strMeal}</h2>
        </div>
    </div>`
    }).join(' ')}`
    inner.innerHTML = box;
}

// ingredients //

$(ingr).click(function () {
    closeNavbar();
    getingrApi();
    innerInput.innerHTML = '';
});

async function getingrApi() {
    $('#loading').fadeIn(500)
    $('#loading').fadeOut(500)
    let data = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    let result = await data.json();
    let finalData = result.meals;
    displayingr(finalData.splice(0, 20))
}

function displayingr(finalData) {
    // console.log(finalData);
    let box = `
    ${finalData.map((ele) => {
        return `<div onclick="getIngrDetailsApi('${ele.strIngredient}')" class="w-full md:w-1/3 lg:w-1/5 mx-auto">
        <i class="fa-solid text-sky-200 fa-drumstick-bite fa-4x"></i>
        <div class="">
            <h2 class="text-3xl font-bold text-sky-200">${ele.strIngredient}</h2>
            <h2 class="text-sm font-bold text-gray-200">${ele.strDescription.slice(0, 60)}</h2>

        </div>
    </div>`
    }).join(' ')}`
    inner.innerHTML = box;
};

async function getIngrDetailsApi(ingrName) {
    $('#loading').fadeIn(500)
    $('#loading').fadeOut(500)
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingrName}`);
    let result = await data.json();
    let finalData = result.meals;
    displayIngrDetails(finalData)
    console.log(finalData);
}

function displayIngrDetails(finalData) {
    let box = `
    ${finalData.map((ele) => {
        return `<div onclick="mealDetails(${ele.idMeal})" class="mealImg cursor-pointer overflow-hidden relative w-full lg:w-1/3 xl:w-1/5 mx-auto">
        <img class="w-full rounded-lg" src="${ele.strMealThumb}" alt="">
        <div class="layer flex-col justify-center text-center overflow-hidden rounded-lg">
            <h2 class="text-3xl font-bold text-gray-900">${ele.strMeal}</h2>
        </div>
    </div>`
    }).join(' ')}`
    inner.innerHTML = box;
}


// searchByName //

$(search).click(function () {
    closeNavbar()
    displaySearchInputs()
})

function displaySearchInputs() {
    let box = `
    
        <input onInput='searchByNameApi(value)' id="searchName" type="text" class="w-2/6 p-2 rounded-lg" placeholder='Search By Name'>
        <input onInput='searchByLetterApi(value)' id="searchFrist" type="text" class="w-2/6 p-2 rounded-lg" placeholder='Search by Frist Letter'>
    `
    innerInput.innerHTML = box;
    inner.innerHTML = '';
}

async function searchByNameApi(value) {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`);
    let result = await data.json();
    let finalData = result.meals;
    displaySearchResults(finalData);
    console.log(finalData);
}

function displaySearchResults(finalData) {
    $('#loading').fadeIn(200)
    $('#loading').fadeOut(200)
    let box = `
    ${finalData.map((ele) => {
        return `<div onclick="mealDetails(${ele.idMeal})" class="mealImg overflow-hidden relative w-full lg:w-1/3 xl:w-1/5 mx-auto">
        <img class="w-full rounded-lg" src="${ele.strMealThumb}" alt="">
        <div class="layer flex-col justify-center text-center overflow-hidden rounded-lg">
            <h2 class="text-3xl font-bold text-gray-900">${ele.strMeal}</h2>
        </div>
    </div>`
    }).join(' ')}`
    inner.innerHTML = box;
};

// searchByFristLitter //

async function searchByLetterApi(value) {
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`);
    let result = await data.json();
    let finalData = result.meals;
    displaySearchResults(finalData)
    console.log(finalData);
}

// form //

$(contact).click(function () {
    $('#loading').fadeIn(500);
    $('#loading').fadeOut(500);
    closeNavbar();
    displayForm();
})

function displayForm() {
    let box = `
    <form class='flex flex-col'>
        <div class="flex mx-auto gap-x-5 gap-y-10 flex-wrap justify-center items-center mt-60">
            <div class="w-full lg:w-2/5 flex flex-col">
                <input id='inputName' oninput="validateForm(this)" class="w-4/4 p-2 rounded-lg" type="text" placeholder=" Enter Your Name">
                <p class='hidden w-4/4 p-2 mt-3 bg-red-800 rounded-lg text-center'>Special characters and numbers not allowed</p>
            </div>
            <div class="w-full lg:w-2/5 flex flex-col">
                <input id='inputEmail' oninput="validateForm(this)" class="w-4/4 p-2 rounded-lg" type="email" placeholder="Enter Your Email">
                <p class='hidden w-4/4 p-2 mt-3 bg-red-800 rounded-lg text-center'>Email not valid *exemple@yyy.zzz</p>
            </div>
            <div class="w-full lg:w-2/5 flex flex-col">
                <input id='inputPhone' oninput='validateForm(this)' class="w-4/4 p-2 rounded-lg" type="text" placeholder=" Enter Your Phone">
                <p class='hidden w-4/4 p-2 mt-3 bg-red-800 rounded-lg text-center'>Enter valid Phone Number</p>
            </div>
            <div class="w-full lg:w-2/5 flex flex-col">
                <input <input id='inputAge' oninput='validateForm(this)' class="w-4/4 p-2 rounded-lg" type="email" placeholder="Enter Your Age">
                <p class='hidden w-4/4 p-2 mt-3 bg-red-800 rounded-lg text-center'>Enter valid age</p>
            </div>
            <div class="w-full lg:w-2/5 flex flex-col">
                <input <input id='inputPassword' oninput='validateForm(this)' class="w-4/4 p-2 rounded-lg" type="text" placeholder=" Enter Your Password">
                <p class='hidden w-4/4 p-2 mt-3 bg-red-800 rounded-lg text-center'>Enter valid password *Minimum eight characters, at least one letter and one number:*</p>
            </div>
            <div class="w-full lg:w-2/5 flex flex-col">
                <input <input id='inputRepassword' oninput='validateForm(this)' class="w-4/4 p-2 rounded-lg" type="email" placeholder="Enter Your Repassword">
                <p class='hidden w-4/4 p-2 mt-3 bg-red-800 rounded-lg text-center'>Enter valid repassword</p>
            </div>
        </div>
        <div class="justify-center mx-auto mt-10">
            <button id='formBtn'
                class="text-1xl w-full rounded-lg py-2 px-4 text-red-800 outline outline-red-900">Submit</button>
        </div>
    </form>

    `
    inner.innerHTML = box;
}

function validateForm(ele) {

    let regex = {
        inputName: /^[A-Z][a-z]{3,}/,
        inputEmail: /^[A-Z][a-z]{3,}/,
        inputPhone: /^[A-Z][a-z]{3,}/,
        inputAge: /^[A-Z][a-z]{3,}/,
        inputPassword: /^[A-Z][a-z]{3,}/,
        inputRepassword: /^[A-Z][a-z]{3,}/,
    }
    if (regex[ele.id].test(ele.value)) {
        ele.nextElementSibling.classList.replace('block', 'hidden')
        flag = 0
        return true;
    } else {
        ele.nextElementSibling.classList.replace('hidden', 'block')
        return false;
    }
}

function submit() {
    if (flag = 0) {
        console.log('good');
    } else {
        console.log('no');
    }
}