const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');


console.log('deu bom');



app.get('/total', async (req, res) => {
    const {data} = await axios.get('https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-total.csv')
    
    dadoCsv = data;
    regex = /[\n]+/
    vetorDados = dadoCsv.split(regex)

    cabecalho = vetorDados[0].split(',')
    vetorDados = vetorDados.splice(1)
    tiraUltimo = vetorDados.length;

    vetorDados = vetorDados.splice(vetorDados[tiraUltimo],tiraUltimo-1)

    json = vetorDados.map((item, index)=>{
        vetorItem = item.split(',')
        objeto = {
            id: index,
            country: vetorItem[0],
            state: vetorItem[1],
            totalCases: vetorItem[2],
            totalCasesMS: vetorItem[3],
            notConfirmedByMS: vetorItem[4],
            deaths: vetorItem[5],
            url: vetorItem[6]
        }
        return objeto
    })
    return res.json(json) // opa oap oa

}) 

app.get('/states', async (req, res) => {
    const {data} = await axios.get('https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-states.csv')
    
    dadoCsv = data;
    regex = /[\n]+/
    vetorDados = dadoCsv.split(regex)
    
    cabecalho = vetorDados[0].split(',')
    vetorDados = vetorDados.splice(1)
    tiraUltimo = vetorDados.length;
    
    vetorDados = vetorDados.splice(vetorDados[tiraUltimo],tiraUltimo-1)
    
    json = vetorDados.map((item, index)=>{
        vetorItem = item.split(',')
        objeto = {
            id: index,
            date: vetorItem[0],
            country: vetorItem[1],
            state: vetorItem[2],
            city: vetorItem[3],
            deaths: vetorItem[4],
            newCases: vetorItem[5],
            totalCases: vetorItem[6]
        }
        return objeto
    })    

    return res.json(json)

})

app.get('/cities', async (req, res) => {
    const {data} = await axios.get('https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-cities.csv')
    
    dadoCsv = data;
    regex = /[\n]+/
    vetorDados = dadoCsv.split(regex)
    
    cabecalho = vetorDados[0].split(',')
    vetorDados = vetorDados.splice(1)
    tiraUltimo = vetorDados.length;
    
    vetorDados = vetorDados.splice(vetorDados[tiraUltimo],tiraUltimo-1)
    
    json = vetorDados.map((item, index)=>{
        vetorItem = item.split(',')
        objeto = {
            id: index,
            country: vetorItem[0],
            state: vetorItem[1],
            city: vetorItem[2],
            ibgeID: vetorItem[3],
            deaths: vetorItem[4],
            totalCases: vetorItem[5]
        }
        return objeto
    })

    return res.json(json)

})

app.get('/cities-time', async (req, res) => {
    const {data} = await axios.get('https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-cities-time.csv')
    
    dadoCsv = data;
    regex = /[\n]+/
    vetorDados = dadoCsv.split(regex)
    
    cabecalho = vetorDados[0].split(',')
    vetorDados = vetorDados.splice(1)
    tiraUltimo = vetorDados.length;
    
    vetorDados = vetorDados.splice(vetorDados[tiraUltimo],tiraUltimo-1)
    
    json = vetorDados.map((item, index)=>{
        vetorItem = item.split(',')
        objeto = {
            id: index,
            date: vetorItem[0],
            country: vetorItem[1],
            state: vetorItem[2],
            city: vetorItem[3],
            ibgeID: vetorItem[4],
            newCases: vetorItem[5],
            totalCases: vetorItem[6]
        }
        return objeto
    })

    return res.json(json)

})
app.listen(port)