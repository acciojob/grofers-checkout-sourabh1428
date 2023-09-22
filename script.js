const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const x=document.querySelectorAll(".price");





const getSum = () => {
//Add your code here
  let total=0;

for(let i=0;i<x.length;i++){
    total+=Number(x[i].innerHTML);
}

	return total
};

getSumBtn.addEventListener("click", getSum);

