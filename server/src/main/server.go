package main

import (
  "github.com/gin-contrib/cors"
  "github.com/gin-gonic/gin"
  "main/database"
  "time"
)

func main() {
  r := gin.Default()
  r.Use(cors.New(cors.Config{
    AllowOrigins:     []string{"http://localhost:4200"},
    AllowMethods:     []string{"GET", "PUT", "PATCH"},
    AllowHeaders:     []string{"content-type"},
    ExposeHeaders:    []string{"Content-Length"},
    AllowCredentials: true,
    AllowOriginFunc: func(origin string) bool {
      return origin == "https://github.com"
    },
    MaxAge: 12 * time.Hour,
  }))

  shopApi := r.Group("/shop")
  {
    shopApi.GET("/", func(c *gin.Context) {
      shops, err := database.GetShops()
      if err != nil {
        c.String(404, err.Error())
        return
      }
      c.JSON(200, shops)
    })

    shopApi.GET("/:name", func(c *gin.Context) {
      shop, err := database.GetShop(c.Param("name"))
      if err != nil {
        c.String(404, err.Error())
        return
      }
      c.JSON(200, shop)
    })
  }

  customerApi := r.Group("/customer")
  {
    customerApi.GET("/", func(c *gin.Context) {
      customers, err := database.GetCustomers()
      if err != nil {
        c.String(404, err.Error())
        return
      }
      c.JSON(200, customers)
    })

    customerApi.GET("/:name", func(c *gin.Context) {
      customer, err := database.GetCustomer(c.Param("name"))
      if err != nil {
        c.String(404, err.Error())
        return
      }
      c.JSON(200, customer)
    })
  }

  err := r.Run(":4201")
  if err != nil {
    return
  }
}
