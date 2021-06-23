package database

import (
  "fmt"
  "os"
)

type (
  shop struct {
    Name string `json:"name"`
    Owner string `json:"owner"`
    Email string `json:"email"`
    Description string `json:"description"`
  }

  customer struct {
    Name string `json:"name"`
    Email string `json:"email"`
  }
)

var shops []shop
var customers []customer
var products []Product
var messages []Message

func init() {
  initCustomer()
  initShop()
  initProducts()
  initMessages()
}

func logErr(msg interface{}) {
  fmt.Println("Error: ", msg)
  os.Exit(1)
}
