function enviar(){
    let nota=0
    let quest1 = QUIZ.quest1.value
    let quest2 = QUIZ.quest2.value
    let quest3 = QUIZ.quest3.value
    let quest4 = QUIZ.quest4.value
    let quest5 = QUIZ.quest5.value

    if (quest1 == 1){
        nota +=1
    }

    if (quest2 == 1){
        nota +=1
    }

    if (quest3 ==1){
        nota +=1
    }

    if (quest4 ==1){
        nota +=1
    }

    if (quest5 ==1){
        nota +=1
    }

    if (nota==5){
        alert ("nota:5; Muito bem!")
    }

    if (nota==4){
        alert (" nota:4; Bom!")
    }

    if (nota==3){
        alert (" nota: 3; Satisfátorio!")
    }

    if (nota==2){
        alert(" nota:2; Vamos lá, tente denovo!")
    }
    if (nota==1){
        alert ("nota:1; Estude um pouco mais!")
    }
}
    






