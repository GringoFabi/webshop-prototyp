package main

import (
  "github.com/gin-gonic/gin"
  "main/database"
)

func main() {
  r := gin.Default()
  r.GET("/shop", func(c *gin.Context) {
    shops, err := database.GetShops()
    if err != nil {
      c.String(404, err.Error())
      return
    }
    c.JSON(200, shops)
  })

  r.GET("/shop/:name", func(c *gin.Context) {
    shop, err := database.GetShop(c.Param("name"))
    if err != nil {
      c.String(404, err.Error())
      return
    }
    c.JSON(200, shop)
  })

  r.GET("/customer", func(c *gin.Context) {
    customers, err := database.GetCustomers()
    if err != nil {
      c.String(404, err.Error())
      return
    }
    c.JSON(200, customers)
  })

  r.GET("/customer/:name", func(c *gin.Context) {
    customer, err := database.GetCustomer(c.Param("name"))
    if err != nil {
      c.String(404, err.Error())
      return
    }
    c.JSON(200, customer)
  })

  err := r.Run(":4201")
  if err != nil {
    return
  }
}
