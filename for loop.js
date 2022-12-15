
/*for(let i = 0;i < 6; i++){
    console.log(` Dentro do Loop: ${i}`)
}
console.log('Loop concluído')*/

const names= ['Linus', 'Ada', 'Bill']  //Interação 
for(let i = 0; i < names.length ; i ++){    //Inicialização , condição e incremento
      const HTMTemplate =`<p>${names[i]}</p>`
      document.write(HTMTemplate)
     // console.log(i)


}