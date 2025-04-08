
// This file contains the configuration for the application
// including the form controls for different forms.


//register form controls
export const registerFormControls = [
    {
    name :"username",
    label :"User name",
    placeholder :"Enter your user name",
    componentType :"input",
    type :"text",
    },
    {
        name: "email",
        label: "Email",
        placeholder: "Enter your email",
        componentType: "input",
        type: "email",
    }, 
    {
        name: "password",
        label: "Password",
        placeholder: "Enter password",
        componentType: "input",
        type: "passwprd",
    }

]

//login form controls
export const LoginFormControls =[
    {
        name : "email",
        label : "Email",
        placeholder : "Enter your email",
        componentType : "input",
        type : "email",
    },
    {
        name : "password",
        label : "Password",
        placeholder : "Enter your password",
        componentType : "input",
        type : "password",
    }
]

//products form controls
export const addProductFormElement = [
    {
        label: "Title",
        name:"title",
        componentType:"input",
        type:"text",
        placeholder:"Enter product name",
    },
    {
        label: "Description",
        name:"description",
        componentType:"textarea",
        placeholder:"Enter product description",
    },
    {
        label: "Category",
        name:"category",
        componentType:"select",
        options:[
            {id:"men",label:"Men"},
            {id:"women",label:"Women"},
            {id:"kids",label:"Kids"},
            {id:"accessories",label:"Accessories"},
            {id:"footware",label:"Footware"},
        ],
    },
    {
        label:"Brand",
        name:"brand",
        componentType:"select",
        options:[
            {id:"adidas",label:"Adidas"},
            {id:"nike",label:"Nike"},
            {id:"puma",label:"Puma"},
            {id:"reebok",label:"Reebok"},
            {id:"underarmour",label:"Under Armour"},
            {id:"levis",label:"Levis"},
            {id:"h&m",label:"H&M"},
            {id:"zara",label:"Zara"},
        ],
    },
    {
        lable:"Price",
        name:"price",
        componentType:"input",
        type:"number",
        placeholder:"Enter product price",
    },
    {
        lable:"Sale price",
        name:"salePrice",
        componentType:"input",
        type:"number",
        placeholder:"Enter product sale price(optional)",
    },
    {
        lable:"Total Stock",
        name:"totalStock",
        componentType:"input",
        type:"number",
        placeholder:"Enter product total stock",
    },
];