package database

import (
  "encoding/json"
  "errors"
  "fmt"
  "io/ioutil"
  "os"
)

type Product struct {
  Name string `json:"name"`
  Price float64 `json:"price"`
  Description string `json:"description"`
  Condition string `json:"condition"`
}

func initProducts() {
  wd, err := os.Getwd()
  if err != nil {
    logErr(err)
  }

  file, err := os.Open(fmt.Sprintf("%v/database/products.json", wd))
  if err != nil {
    logErr(err)
  }

  byteFile, _ := ioutil.ReadAll(file)
  if err != nil {
    logErr(err)
  }

  err = json.Unmarshal(byteFile, &products)
  if err != nil {
    logErr(err)
  }
}

func GetProducts() ([]Product, error) {
  if len(products) <= 0 {
    return nil, errors.New("no products available")
  }
  return products, nil
}
