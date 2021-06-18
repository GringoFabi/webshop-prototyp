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
  }

  customer struct {
    Name string `json:"name"`
    Email string `json:"email"`
  }
)

var shops []shop
var customers []customer

func init() {
  initCustomer()
  initShop()
}

func logErr(msg interface{}) {
  fmt.Println("Error: ", msg)
  os.Exit(1)
}
