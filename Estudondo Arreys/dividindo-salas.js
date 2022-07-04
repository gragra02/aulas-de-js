        const nomes = ["João", "João","João","João","João", "Maria",  "Maria",
        "Maria", "Maria", "Maria", "Beto", "João","João","João","João", "Maria",  "Maria",
        "Maria", "Maria", "Maria",]

        console.log(nomes.length)
        const sala1 = nomes.slice(0,nomes.length/2)
        const sala2 = nomes.slice(nomes.length/2)

        console.log(`Alunos da sala 1 : ${sala1}`)
        console.log(`Alunos da sala 2 : ${sala2}`)