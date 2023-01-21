import { url } from "inspector";

const projects = [{
    title: "What Drink Should I Order", 
    img:"/../public/project-images/WhatDrinkLanding.png", 
    deployed:"",
    technologies:['Next.js', "React", "Sass", "Vercel", "Es6", "HTML"], 
    features:["User can put in preferences of alcohol and flavor for customized flavor suggestions",
    "User can get random drink suggestions", "Responsive styling allows for ease of use on mobile and desktop"]
},{
    title: "Birds of A Feather", 
    img:"/../public/project-images/BoAF.png", 
    deployed:"",
    technologies:["GraphQL", "MapQuest API", "React", "Postman", "Cypress", "Circle CI", "Apollo", "Rails", "Es6"], 
    features:["User can create events for other families to go to",
     "User can rsvp to different events",
      "User can view events in their area in both a map view and list view",
    "Responsive design allows for mobile and desktop use", 
    "Mapquest API used so user can have visual of where event is in relation to them", 
    "Postman server used for fetch requests while backend being built out", 
    "Cypress used for e2e testing to ensure user experience is as expected"]
},{
    title: "Discoverd", 
    img:"/../public/project-images/discoverd.png", 
    deployed:"",
    technologies:['React', 'React Native', 'Expo', 'Cypress'], 
    features:['User can upload images from phone of plants for identification suggestions',
        'User can click on link to learn about possible plant identification', ]
},{
    title: "Tea Journal", 
    img:"", 
    deployed:"",
    technologies:['Express.js', 'React', 'Cypress', 'Es6'], 
    features:[]
}]

export default projects; 