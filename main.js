async function loadNavbar() {
    try {
        const response = await fetch('navbar.html'); // 請求 navbar.html
        if (response.ok) {
            const html = await response.text(); // 讀取 HTML 內容
            document.getElementById('navbar').innerHTML = html; // 插入到頁面中
        } else {
            console.error('Failed to fetch navbar:', response.status);
        }
    } catch (error) {
        console.error('Error fetching navbar:', error);
    }
}

// 呼叫函式載入 navbar
loadNavbar();
async function loadupper() {
    try {
        const response = await fetch('upper.html'); // 請求 upper.html
        if (response.ok) {
            const html = await response.text(); // 讀取 HTML 內容
            document.getElementById('upper').innerHTML = html; // 插入到頁面中
        } else {
            console.error('Failed to fetch upper:', response.status);
        }
    } catch (error) {
        console.error('Error fetching upper:', error);
    }
}

// 呼叫函式載入 upper
loadupper();
async function loadmain() {
    try {
        const response = await fetch('main.html'); // 請求 main.html
        if (response.ok) {
            const html = await response.text(); // 讀取 HTML 內容
            document.getElementById('main').innerHTML = html; // 插入到頁面中
        } else {
            console.error('Failed to fetch main:', response.status);
        }
    } catch (error) {
        console.error('Error fetching main:', error);
    }
}

// 呼叫函式載入 main
loadmain();


async function getUserServiceOrderMain() {
    const userServiceOrderBox = document.getElementById('userServiceOrderBox');
    userServiceOrderBox.style.display='block';
    try {
        const response = await fetch('/public/data/test.json');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const userServiceOrderMain = document.getElementById('userServiceOrderMain');

        let htmlContent = "";
        userServiceOrderMain.innerHTML ='';
        data?.map(order => {
            const orderTime = new Date(order.orderTime).toLocaleString();
            const paymentTime = new Date(order.paymentTime).toLocaleString();
            const startTime = new Date(order.startTime).toLocaleString();
            const expiryTime = new Date(order.expiryTime).toLocaleString();
            htmlContent += `
                <div class="userServiceOrderMain">
                    <div class="setCenter">${order.name}</div>
                    <div class="setCenter">${order.status}</div>
                    <div class="setCenter">${order.purchaseQuantity}</div>
                    <div class="setCenter">${order.paymentMethod}</div>
                    <div class="setCenter">${order.transactionAmount}</div>
                    <div class="setCenter">${orderTime}</div>
                    <div class="setCenter">${paymentTime}</div>
                    <div class="setCenter">${startTime}</div>
                    <div class="setCenter">${expiryTime}</div>
                </div>
            `;
        });
        
        console.log('htmlContent',htmlContent);
        userServiceOrderMain.innerHTML = htmlContent;
    } catch (error) {
        console.error('Error fetching user service order data:', error);
    }
}

function getUserBuyService(){
    const userServiceOrderBox = document.getElementById('userServiceOrderBox');
    userServiceOrderBox.style.display='none';
}

function clickOrder(){
    const main = document.getElementById('main');
    main.style.display="block";
}

function clickOtherPage(){
    const main = document.getElementById('main');
    main.style.display="none";
}