
///////------->>>>>>> my first calculator project starts from here-------with bo-(dmas) rule

let equation="";
let heading=document.querySelector(".insert_equation");

let btn=document.querySelectorAll(".keys");
btn.forEach((button)=>{
    
            button.addEventListener('click', () => {
                if (button.dataset.value === "clear") {
                    equation = ""; 
                }
               
                else if (button.dataset.value === "c"){
                equation=equation.slice(0,-1);
                }
                else if (button.dataset.value === "="){
                    let myarray=[];
                    let first=0;
                    for(let j=0;j<equation.length;j++){
                        if(equation[j]=='/'|| equation[j]=='*'|| equation[j]=='+'|| equation[j]=='-' ||equation[j]=='%') {
                            myarray.push(equation.slice(first,j));
                            myarray.push(equation[j]);
                            first=j+1;
                        }
                        else if(equation[j]=='0'|| equation[j]=='1'|| equation[j]=='2'|| equation[j]=='3'|| equation[j]=='4'|| equation[j]=='5'|| equation[j]=='6'|| equation[j]=='7'|| equation[j]=='8'|| equation[j]=='9'){
                    
                        }
                        else{
                            break;
                        }
                    }
                    if(first<equation.length){
                        myarray.push(equation.slice(first));
                    }
                    
                    
                    let second,third;
                    for(let k=4;k>=0;k--){
                        if(k==4){
                            for(let j=0;j<myarray.length;j++){
                                if(myarray[j]=='%'){
                                second=Number(myarray[j-1]);
                                third=(second/Number(myarray[j+1]))*100;
                                myarray.splice(j-1,3,third);
                                j=0;
                                }
                              
                            }
                        }
                        if(k==3){
                            for(let j=0;j<myarray.length;j++){
                                if(myarray[j]=='/'){
                                second=Number(myarray[j-1]);
                                third=second/Number(myarray[j+1]);
                                myarray.splice(j-1,3,third);
                                j=0;
                                }
                              
                            }
                        }
                        else if(k==2){
                            for(let j=0;j<myarray.length;j++){
                                if(myarray[j]=='*'){
                                second=Number(myarray[j-1]);
                                third=second*Number(myarray[j+1]);
                                myarray.splice(j-1,3,third);
                                j=0;
                                }
                                
                            }
                        }
                        else if(k==1){
                            for(let j=0;j<myarray.length;j++){
                                if(myarray[j]=='-'){
                                second=Number(myarray[j-1]);
                                third=second-Number(myarray[j+1]);
                                myarray.splice(j-1,3,third);
                                j=0;
                                }
                              
                            }
                        }
                        else{
                            for(let j=0;j<myarray.length;j++){
                                if(myarray[j]=='+'){
                                second=Number(myarray[j-1]);
                                third=second+Number(myarray[j+1]);
                                myarray.splice(j-1,3,third);
                                j=0;
                                }
                            
                            }
                        }
                    
                    }
                    
                   equation=myarray[0];
                }
                else{
                equation += button.dataset.value; 
                }
                heading.innerText = equation; 
            });
});





////////<<<<-------my first calculation project ends here 

