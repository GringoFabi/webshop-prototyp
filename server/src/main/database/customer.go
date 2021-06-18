package database

import (
  "encoding/json"
  "errors"
  "fmt"
  "io/ioutil"
  "os"
)

func initCustomer() {
  wd, err := os.Getwd()
  if err != nil {
    logErr(err)
  }

  file, err := os.Open(fmt.Sprintf("%v/database/customer.json", wd))
  if err != nil {
    logErr(err)
  }

  byteFile, _ := ioutil.ReadAll(file)
  if err != nil {
    logErr(err)
  }

  err = json.Unmarshal(byteFile, &customers)
  if err != nil {
    logErr(err)
  }
}

func GetCustomer(name string) (*customer, error) {
  if len(customers) <= 0 {
    return nil, errors.New("no customers available")
  }
  for _, c := range customers {
    if c.Name == name {
      return &c, nil
    }
  }
  var msg = fmt.Sprintf("no shop '%s' availabe", name)
  return nil, errors.New(msg)
}

func GetCustomers() ([]customer, error) {
  if len(customers) <= 0 {
    return nil, errors.New("no shops available")
  }
  return customers, nil
}
