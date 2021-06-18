package database

import (
  "encoding/json"
  "errors"
  "fmt"
  "io/ioutil"
  "os"
)

func initShop() {
  wd, err := os.Getwd()
  if err != nil {
    logErr(err)
  }

  file, err := os.Open(fmt.Sprintf("%v/database/shop.json", wd))
  if err != nil {
    logErr(err)
  }

  byteFile, _ := ioutil.ReadAll(file)
  if err != nil {
    logErr(err)
  }

  err = json.Unmarshal(byteFile, &shops)
  if err != nil {
    logErr(err)
  }
}

func GetShop(name string) (*shop, error) {
  if len(shops) <= 0 {
    return nil, errors.New("no shops available")
  }
  for _, s := range shops {
    if s.Name == name {
      return &s, nil
    }
  }
  var msg = fmt.Sprintf("no shop '%s' availabe", name)
  return nil, errors.New(msg)
}

func GetShops() ([]shop, error) {
  if len(shops) <= 0 {
    return nil, errors.New("no shops available")
  }
  return shops, nil
}
