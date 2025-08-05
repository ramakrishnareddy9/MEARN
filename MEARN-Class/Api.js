let container = document.getElementById("container")
async function fetchingUrlData(){

    try {
        let fetchingData = await fetch('https://fakestoreapi.com/products');
        let data = await fetchingData.json();

        // console.log(data);
        appendingToDom(data)
    }
    catch(error){
        console.log("error:",error)
    }
}

fetchingUrlData();


// let [a,b] = [1,2];

function appendingToDom(data){



    data.forEach((element)=>{


    let childDiv = document.createElement("div");
    let h3Title = document.createElement("h3");
    let pDesc = document.createElement("p");
    let pPrice = document.createElement("p");
    let ecomImage = document.createElement("img")
        let {title, description, price, image} =element;

            h3Title.innerText = title;
            pDesc.innerText = description;
            pPrice.innerText = `Rs: ${price}`;
            ecomImage.src = image;
            childDiv.append(ecomImage,h3Title,pDesc,pPrice)
            container.append(childDiv);
    })


}
