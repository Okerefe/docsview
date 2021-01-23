<template>
    <div id="main" class="row">
        <div class="space"></div>

        <div class="left">
            <div class="nav-container">
                <ul class="nav">
                    <li class="active">
                        <a href="#introduction">
                            <i class="fa fa-home"></i>
                            <span class="text">Introduction</span>
                        </a>
                    </li>
                    <li>
                        <a href="#authentication">
                            <i class="fa fa-key"></i>
                            <span class="text">Authentication</span>
                        </a>
                    </li>
                    <li>
                        <a href="#errors">
                            <i class="fa">&#128554;</i>
                            <span class="text">Errors</span>
                        </a>
                    </li>

                    <br><br><br>


                    <h3></h3>

                    <li class="list-small">
                        <a href="#">
                            <hr style="display: inline-block; width: 20%;"/>
                            <span class="text">Api End Points</span>
                        </a>
                    </li>
                    <li class="list-small">
                        <a href="#transactions">
                            <span class="text">Transactions</span>
                        </a>
                    </li>
                    <li class="list-small">
                        <a href="#">
                            <span class="text">Transactions Split</span>
                        </a>
                    </li>
                    <li class="list-small">
                        <a href="#">
                            <span class="text">Customers</span>
                        </a>
                    </li>
                    <li class="list-small">
                        <a href="#">
                            <span class="text">Dedicated Nuban</span>
                        </a>
                    </li>
                    <li class="list-small">
                        <a href="#">
                            <span class="text">Sub Accounts</span>
                        </a>
                    </li>

                    <li class="list-small">
                        <a href="#">
                            <span class="text">Plans</span>
                        </a>
                    </li>

                    <li class="list-small">
                        <a href="#">
                            <span class="text">Subscriptions</span>
                        </a>
                    </li>
                    <li class="list-small">
                        <a href="#">
                            <span class="text">Products</span>
                        </a>
                    </li>
                    <li class="list-small">
                        <a href="#">
                            <span class="text">Payment Pages</span>
                        </a>
                    </li>
                    <li class="list-small">
                        <a href="#">
                            <span class="text">Invoices</span>
                        </a>
                    </li>
                    <li class="list-small">
                        <a href="#">
                            <span class="text">Settlements</span>
                        </a>
                    </li>

<!--                    <li class="child-list" >-->
<!--                        <a href="#">-->
<!--                            <span class="text">Smaller One</span>-->
<!--                        </a>-->

<!--                    </li>-->

                </ul>

            </div>
        </div>

        <div class="right">
            <br><br><br>

            <div class="block" id="introduction">
                <h3>Introduction</h3>

                <p>Learn how to integrate our APIs into your application</p>

            </div>
            <div class="block">
                <h3>API Basics</h3>

                <p>The Paystack API gives you access to pretty much all the features you can use on our dashboard
                    and lets you extend them for use in your application. It strives to be RESTful
                    and is organized around the main resources you would be interacting with - with a few notable exceptions.

                </p>
            </div>

            <div class="block">
                <h3>Sample Requests</h3>

                <p>We provide sample API calls next to each method using cURL.
                    All you need to do is insert your specific parameters, and you can test the calls from the command line.
                    See this tutorial on using cURL with APIs.
                </p>

                <p>You can also use Postman if you aren't familiar with cURL.
                    Postman is an easy to use API development environment for making HTTP requests.
                    You can download the Paystack Postman Collection to make testing the API easier.</p>
            </div>

            <div class="block">
                <h3>Request and Response</h3>

                <p>Both request body data and response data are formatted as JSON. Content type for responses will always be application/json. Generally, all responses will be in the following format:
                </p>

            </div>
            <div class="block">
                <code-block info="Response Format">
{

    "status": [boolean],  // Only true if the details provided could be processed and no error occured while processing

    "message": [string], // Explains why status is false... Entirely informational. Please only log this but do not use for your checks

    "data": [object]    // contains actionable result of processing if present

}
                </code-block>
            </div>
            <div class="block">

                <p>While we generally recommend that developers use HTTP status codes to determine the result of an API call, we have provided a handy status key to let you know upfront if the request was successful or not.</p>

                <p>The message key is a string which will contain a summary of the response and its status. For instance when trying to retrieve a list of customers, message might read “Customers retrieved”. In the event of an error, the message key will contain a description of the error as with the authorization header situation above. This is the only key that is universal across requests.</p>

                <p>The data key is where you want to look at for the result of your request. It can either be an object, or an array depending on the request made. For instance, a request to retrieve a single customer will return a customer object in the data key, while the key would be an array of customers if a list is requested instead.</p>

                <p>The meta key is used to provide context for the contents of the data key. For instance, if a list of transactions performed by a customer is being retrieved, pagination parameters can be passed along to limit the result set. The meta key will then contain an object with the following attributes:</p>

            </div>
            <div class="block">
                <code-block info="Meta Key Structure">
"meta": {

    "total": 2,

    "skipped": 0,

    "perPage": 50,

    "page": 1,

    "pageCount": 1

}
                </code-block>
            </div>


            <div class="block">
               <h3>Keys</h3>

                <table>
                    <tr>
                        <td>Total</td>
                        <td>Number</td>
                        <td>This is the total number of transactions that were performed by the customer.</td>
                    </tr>
                    <tr>
                        <td>Skipped</td>
                        <td>Number</td>
                        <td>This is the number of records skipped before the first record in the array returned.</td>
                    </tr>
                    <tr>
                        <td>PerPage</td>
                        <td>Number</td>
                        <td>This is the maximum number of records that will be returned per request. This can be modified by passing a new value as a perPage query parameter. Default: 50</td>
                    </tr>
                    <tr>
                        <td>Page</td>
                        <td>Number</td>
                        <td>This is the current page being returned. This is dependent on what page was requested using the page query parameter. Default: 1</td>
                    </tr>
                    <tr>
                        <td>PageCount</td>
                        <td>Number</td>
                        <td>This is how many pages in total are available for retrieval considering the maximum records per page specified. For context, if there are 51 records and perPage is left at its default value, pageCount will have a value of 2.</td>
                    </tr>
                </table>
            </div>

            <div class="block">

                <h3 id="authentication">Authentication</h3>

                <p>Authenticate your API calls by including your secret key in the Authorization header of every request you make. You can manage your API keys from the dashboard .</p>

                <p>Generally, we provide both public and secret keys. Public keys are meant to be used from your front-end when integrating using Paystack Inline and in our Mobile SDKs only. By design, public keys cannot modify any part of your account besides initiating transactions to you. The secret keys however, are to be kept secret. If for any reason you believe your secret key has been compromised or you wish to reset them, you can do so from the dashboard.</p>

            </div>

            <div class="block">
                <p>Authorization headers should be in the following format: <br>Authorization: Bearer SECRET_KEY</p>
            </div>

            <div class="double-block">
                <div class="double-block-first-item">
                    <div class="block">
                        <h3 id="errors">Errors</h3>

                        <p>As stated earlier, Paystack's API is RESTful and as such,
                            uses conventional HTTP response codes to indicate the success or failure of requests.
                        </p>

                        <p>
                            We discuss some common errors and their causes below
                        </p>
                    </div>

                    <div class="block">
                        <h4>Authorization code does not exist or has been deactivated</h4>
                        <ul>
                            <li>   All authorizations are inactive until one transaction succeeds on the card. Attempting charge auth on an inactive authorization will give this message.</li>
                              <li>  You can only charge an authorization for the customer who saved it. If an authorization is paired with the wrong email, you may get this error message.</li>
                        </ul>
                    </div>

                    <div class="block">
                        <h4>This authorization is not reusable</h4>
                        <p>Only reusable authorizations can be used with our charge authorization endpoint. Please confirm reusability on the authorization object before making an attempt to avoid this message.</p>
                    </div>

                    <div class="block">
                        <h4>Invalid Subaccount</h4>
                        <p>
                            All subaccounts codes on Paystack start with ACCT_ and only exist on the integration that created them. And in the domain they were created. Common situations when you will get this message include:
                        </p>
                        <ul>
                            <li>Sending subaccount id or name or any value other than a valid code. Rather don't send any subaccount if you do not intend to split the transaction.</li>
                            <li>Sending subaccount code from another integration.</li>
                            <li>Sending subaccount code created in the test domain while specifying a live key and vice-versa.</li>
                        </ul>

                    </div>
                    <div class="block">
                        <h4>Email does not match Authorization code. Please confirm</h4>

                        <p>You can only charge an authorization for the customer who saved it. If an authorization is paired with the wrong email, you may get this error message</p>
                    </div>
                   <div class="block">
                        <h4>Invalid Split transaction values</h4>

                        <p>This happens when you have attempted to split the payment in a way that is mathematically impossible. The transaction may have specified the subaccount as bearer though the subaccount's share doesn't cover paystack's fees or vice-versa.</p>

                       <p>You may also have specified a transaction charge that was above the amount being paid.</p>
                    </div>
                    <div class="block">
                        <h4>Duplicate Transaction Reference</h4>

                        <p>Every transaction on your integration in a domain must have a unique refrence. You will get this message if you attempt to start a new transaction with a reference that has already been used.</p>

                    </div>
                    <div class="block">
                        <h4>Invalid ****</h4>
                        <p>All objects on Paystack are tied to a domain and integration. Getting an Invalid X message might mean the one specified does not exist in the space commanded by the key presented.</p>
                    </div>

                </div>
                <div class="double-block-second-item">
                    <div class="block">
                        <h4>Error Codes</h4>
                        <table>
                            <tr>
                                <td>200,201</td>
                                <td>Request was successful and intended action was carried out. Note that we will always send a 200 if a charge or verify request was made. Do check the data object to know how the charge went (i.e. successful or failed).</td>
                            </tr>
                            <tr>
                                <td>400</td>
                                <td>A validation or client side error occurred and the request was not fulfilled.</td>
                            </tr>
                            <tr>
                                <td>401</td>
                                <td>The request was not authorized. This can be triggered by passing an invalid secret key in the authorization header or the lack of one</td>
                            </tr>
                            <tr>
                                <td>404</td>
                                <td>Request could not be fulfilled as the request resource does not exist.</td>
                            </tr>
                            <tr>
                                <td>500, 501, 502, 503, 504</td>
                                <td>Request could not be fulfilled due to an error on Paystack's end. This shouldn't happen so please report as soon as you encounter any instance of this.</td>
                            </tr>
                        </table>
                    </div>

                </div>
            </div>
            <div class="block">
                <h3 id="transactions">Transactions</h3>
                <p>The Transactions API allows you create and manage payments on your integration</p>
            </div>

            <div class="double-block">
                <div class="double-block-first-item">
                    <div class="block">
                        <h4>Initialize Transaction</h4>
                        <p>Initialize a transaction from your backend</p>
                    </div>

                    <div class="block">
                        <h4>Headers</h4>
                        <table>
                            <tr>
                                <td>Authorization</td>
                                <td>String</td>
                                <td>Set value to Bearer SECRET_KEY</td>
                            </tr>
                            <tr>
                                <td>Content-Type</td>
                                <td>String</td>
                                <td>Set value to application/json</td>
                            </tr>
                        </table>
                    </div>
                    <div class="block">
                        <h4>Body Param</h4>
                        <table>
                            <tr>
                                <td>amount</td>
                                <td>String</td>
                                <td>Amount should be in kobo if currency is NGN and pesewas for GHS</td>
                            </tr>
                            <tr>
                                <td>email</td>
                                <td>String</td>
                                <td>Customer's email address</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="double-block-second-item">
                    <div class="block">
                        <code-block type="POST"  select="cURL" info="/transaction/initialize">
curl https://api.paystack.co/transaction/initialize

-H "Authorization: Bearer YOUR_SECRET_KEY"

-H "Content-Type: application/json"

-d '{ email: "customer@email.com", amount: "20000" }'

-X POST
                        </code-block>
                    </div>
                    <div class="block">
                        <code-block   select="200 OK" info="Sample Response">
{

    "status": true,

    "message": "Authorization URL created",

    "data": {

        "authorization_url": "https://checkout.paystack.com/0peioxfhpn",

        "access_code": "0peioxfhpn",

        "reference": "7PVGX8MEk85tgeEpVDtD"

    }

}
                        </code-block>

                    </div>
                </div>

            </div>


            <div class="double-block">
                <div class="double-block-first-item">
                    <div class="block">
                        <h4>Verify Transaction</h4>
                        <p>Confirm the status of a transaction</p>
                    </div>

                    <div class="block">
                        <h4>Headers</h4>
                        <table>
                            <tr>
                                <td>Authorization</td>
                                <td>String</td>
                                <td>Set value to Bearer SECRET_KEY</td>
                            </tr>
                        </table>
                    </div>
                    <div class="block">
                        <h4>Path Param</h4>
                        <table>
                            <tr>
                                <td>reference</td>
                                <td>String</td>
                                <td>The transaction reference used to intiate the transaction</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div class="double-block-second-item">
                    <div class="block">
                        <code-block type="GET"  select="cURL" info="/transaction/verify/:reference">
curl https://api.paystack.co/transaction/verify/:reference

-H "Authorization: Bearer YOUR_SECRET_KEY"

-X GET
                        </code-block>
                    </div>
                    <div class="block">
                        <code-block   select="200 OK" info="Sample Response">
{

    "status": true,

    "message": "Verification successful",

        "data": {

        "amount": 27000,

        "currency": "NGN",

        "transaction_date": "2016-10-01T11:03:09.000Z",

        "status": "success",

        "reference": "DG4uishudoq90LD",

        "domain": "test",

        "metadata": 0,

        "gateway_response": "Successful",

        "message": null,

        "channel": "card",

        "ip_address": "41.1.25.1",

        "log": {

        "time_spent": 9,

        "attempts": 1,

        "authentication": null,

        "errors": 0,

        "success": true,

        "mobile": false,

        "input": [],

        "channel": null,

        "history": [{

        "type": "input",

        "message": "Filled these fields: card number, card expiry, card cvv",

        "time": 7

        },

        {

        "type": "action",

        "message": "Attempted to pay",

        "time": 7

        },

        {

        "type": "success",

        "message": "Successfully paid",

        "time": 8

        },

        {

        "type": "close",

        "message": "Page closed",

        "time": 9

        }

        ]

        }

    "fees": null,

    "authorization": {

    "authorization_code": "AUTH_8dfhjjdt",

    "card_type": "visa",

    "last4": "1381",

    "exp_month": "08",

    "exp_year": "2018",

    "bin": "412345",

    "bank": "TEST BANK",

    "channel": "card",

    "signature": "SIG_idyuhgd87dUYSHO92D",

    "reusable": true,

    "country_code": "NG",

    "account_name": "BoJack Horseman"

    },

    "customer": {

    "id": 84312,

    "customer_code": "CUS_hdhye17yj8qd2tx",

    "first_name": "BoJack",

    "last_name": "Horseman",

    "email": "bojack@horseman.com"

    },

    "plan": "PLN_0as2m9n02cl0kp6",

    "requested_amount": 1500000

    }

}
                        </code-block>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import CodeBlock from "./CodeBlock";

    export default {
        props:  [],

        data() {
            return {

            }
        },
        components: {
            'code-block' : CodeBlock
        },

        methods: {
          clickHandler(href) {
              // e.preventDefault();
              // const href = e.getAttribute("href");
              const offsetTop = document.querySelector(href).offsetTop;

              scroll({
                  top: offsetTop,
                  behavior: "smooth"
              });
          },
        },

        mounted() {
        }
    }
</script>


<style scoped>
    * {
        box-sizing: border-box;
    }

    .row {
        display: flex;
        height: 90vh;
        overflow-x: auto;
        margin: 0px;
        padding: 0px;

    }
    .double-block {
        display: flex;
        flex-wrap: wrap;
    }
    .double-block-first-item {
        flex: 50%;
    }
    .double-block-first-item .block{
        width: 100%;
    }
    .double-block-second-item {
        flex: 50%;
    }
    .space {
        flex: 5%;
    }

    .left {
        flex: 20%;
        position: sticky;
        /*overflow-x: auto;*/
    }

    .right {
        flex: 80%;
        overflow-x: auto;
    }

    #main{
        font-family: 'Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol';
        /*font-family: fantasy;*/
    }

    .block {
        padding: 5px;
        margin: 5px;
        width: 50%;
    }
    h1{
        font-size:1em;
        text-align:center;
        color:#eee;
        letter-spacing: 1px;
        text-shadow: 1px 1px 1px rgba(0,0,0,0.9);
        padding: 20px;
    }
    .nav-container {
        margin-top: 20px;
        width: 300px;
        box-shadow: 1px 1px 1px 1px #09a5db;
        transition: all 0.5s linear;
    }
    .nav {
        list-style-type: none;
        margin:0;
        padding:0;
    }
    li{
        height: 50px;
        position:relative;
        background:white;
    }
    a {
        text-decoration: none;
        display:block;
        height:100%;
        width:100%;
        line-height:50px;
        color:#011b33;
        font-weight: bold;
        padding-left:25%;
        border-left: 5px solid transparent;
        letter-spacing: 1px;
        transition:all 0.3s linear;
    }
    .list-small a{
        padding-left:10%;
        font-size: .82rem;
        border-left: 4px solid transparent;
    }
    .text {
        transition: all .4s linear;
    }

    td {
        padding: 10px;
    }

    li:hover .text{
        margin-left:20px
    }
    .active a {
        color: #09a5db;
        border-left:5px solid #09a5db;
        background-color: #fff;
        outline:0;
    }
    li:not(.active):hover a{
        color: #09a5db;
        border-left:5px solid #FCFCFC;
        background-color: #fff;
    }

    i[class ^= "fa"]{
        position:absolute;
        top: 15px;
        left:20px;
        font-size:1.5em;
        transition: all 0.3s linear;
    }


    @media only screen and (max-width : 860px){
        .text{
            display:none;
        }
        .nav-container, a {
            width: 70px;
        }

        .nav-container:hover > ul>li>a .text {
            display:block;
            margin-top: 10px;
            padding-left: 30%;
        }
        .nav-container:hover > ul>li>a {
            background-color: #fff;
            color: #09a5db;
            width: 300px;
            z-index:1;
            border-top: 1px solid rgba(255,255,255,0.1);
            border-bottom: 1px solid #09a5db;
            box-shadow: 0 0 1px 1px #09a5db;
        }

        a:hover{
            width: 300px;
            z-index:1;
            border-top: 1px solid rgba(255,255,255,0.1);
            border-bottom: 1px solid #09a5db;
            box-shadow: 0 0 1px 1px #09a5db;
        }
        a:hover .text {
            display:block;
            margin-top: 10px;
            padding-left: 30%;
        }
        .list-small a:hover{
            margin-bottom: -5px;
        }
        .block {
            width: 80%;
        }

    }
    @media only screen and (max-width: 480px){
        .nav-container, a{ width:50px; }
        span[class ^= "icon"]{left:8px;}
        .block {
            width: 80%;
        }
    }
</style>