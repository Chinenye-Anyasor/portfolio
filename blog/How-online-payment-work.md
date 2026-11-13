---
title: How Online Payments Work
date: 2026-11-10
author: Chinenye Anyasor
sidebar_position: 1
---

# How Online Payments Work
## Introduction 
Nigeria has come a long way with payments. From manual bank payments, where we queued for hours, to early mobile/internet banking, to the rise of online payments that fuelled the explosion of online shopping. 

You can buy anything online these days, from foodstuff to gadgets, without leaving your home, yet many people don't know how online payments work and often wonder how they work. Well, you are about to find out. 

**To fully understand how online payments work, you need to understand payment service providers, payment gateways, and webhooks.**

## Payment service providers (PSP): 
They are companies that own and provide the technology (payment gateway and payment processor) businesses use to collect payments from customers online. They make it possible for you to shop and pay online.  
Some of them include:   
* Paystack, 
* Flutterwave,  
* PayU,   
* Seerbit and others.

## Payment Gateway 
A payment gateway is the technology that lets a business accept online payments. It securely collects and encrypts a customer’s payment details at checkout, whether by card, bank transfer, or another method, and passes them to the payment processor, which completes the transaction with the customer’s bank. 

The exact steps through which this happens are a bit complicated and different for each online payment option, but let's look at how a card payment works.

Sarah’s clothing vendor is running a website sale. To shop, she opens the website, selects a few items, chooses card payment, enters her card details, and completes the payment.  

#### To walk through the process by which the payment gateway ensures Sarah’s payment gets to her vendor, you need to understand the following: 

* **Encryption:** this process secures Sarah’s card details so only the necessary parties can access them.

* **Issuing bank:** this is Sarah’s bank; she has an account with them. They issued the debit and credit card whose details she entered during checkout. 

* **Payment Processor:** the part of the payment service provider that receives encrypted card details from the payment gateway, sends them to the issuing bank for authorization, and returns an approval or decline.

* **Authorization:** the process by which Sarah’s bank checks whether she has enough funds in her account for the items she wants to buy and whether her account has any restrictions.

* **Acquiring bank:** this is the bank that receives and holds payment made through a debit or credit card on behalf of the payment service provider till they send it to Sarah’s vendor’s account.

* **Settlement:** this is when Sarah’s bank moves the required amount from her account to the payment service provider’s bank, called the acquiring bank.  

#### Now that we are familiar with these concepts, let’s walk through the simplified version of how a payment gateway ensures that Sarah’s vendor receives her payment.

1. The gateway receives Sarah’s card details and encrypts them. 

2. The gateway sends the encrypted data to the provider’s payment processor.

3. The payment processor sends an authorization request to the issuing bank (Sarah’s bank). 

4. The issuing bank checks Sarah’s account to see whether it has enough funds to cover the items she wants to buy. It also checks that her account isn't frozen or restricted due to fraud. 

5. The issuing bank approves or declines the payment based on the results of these checks.

6. The payment processor passes the result back to the gateway, which shows Sarah a message on her screen: “Payment successful” or “Payment failed.” 

7. At the same time, the payment service provider sends a webhook to the vendor’s server, so the vendor knows the payment went through and can process Sarah’s order.

8. Later, usually within a day or two, the issuing bank (Sarah’s bank) sends the required amount to the payment service provider’s acquiring bank. This transfer is called settlement. 

9. The payment service provider sends the money to Sarah’s vendor’s bank account.

## Webhook
In step 7, we mentioned a webhook. Let’s look at it from the vendor’s perspective. How does Sarah’s vendor find out that her payment was successful? That’s where a webhook comes in. A webhook is an automated message from a payment service provider to the vendor’s server.  

It is sent when something happens on the provider’s platform that affects the vendor, such as a payment succeeding or failing, a settlement being made, or a refund being issued, among others.

## Conclusion

Now you understand the basics of how online payments work, from the role of payment service providers and payment gateways to how webhooks keep businesses informed about transactions.
