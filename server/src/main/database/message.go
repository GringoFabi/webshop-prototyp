package database

import (
  "encoding/json"
  "errors"
  "fmt"
  "io/ioutil"
  "os"
)

type Message struct {
  Text string `json:"text"`
  Date string `json:"date"`
}

func initMessages() {
  wd, err := os.Getwd()
  if err != nil {
    logErr(err)
  }

  file, err := os.Open(fmt.Sprintf("%v/database/messages.json", wd))
  if err != nil {
    logErr(err)
  }

  byteFile, _ := ioutil.ReadAll(file)
  if err != nil {
    logErr(err)
  }

  err = json.Unmarshal(byteFile, &messages)
  if err != nil {
    logErr(err)
  }
}

func GetMessages() ([]Message, error) {
  if len(messages) <= 0 {
    return nil, errors.New("no products available")
  }
  return messages, nil
}
