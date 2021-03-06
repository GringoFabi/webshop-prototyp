package main

import (
  "github.com/gin-contrib/cors"
  "github.com/gin-gonic/gin"
  "main/database"
  "time"
)

type LoginCommand struct {
  ShopName string `json:"shopName"`
  Email string `json:"email"`
  Password string `json:"password"`
  StayLoggedIn bool `json:"stayLoggedIn"`
}

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

    shopApi.POST("/login", func(c *gin.Context) {
      var login LoginCommand
      c.BindJSON(&login)
      c.JSON(200, login)
    })

    shopApi.GET("/:name", func(c *gin.Context) {
      shop, err := database.GetShop(c.Param("name"))
      if err != nil {
        c.String(404, err.Error())
        return
      }
      c.JSON(200, shop)
    })

    shopApi.GET("/shopByOwner/:owner", func(c *gin.Context) {
      shops, err := database.GetShopsByOwner(c.Param("owner"))
      if err != nil {
        c.String(404, err.Error())
        return
      }
      c.JSON(200, shops)
    })

    shopApi.GET("/shopByEmail/:email", func(c *gin.Context) {
      shops, err := database.GetShopsByEmail(c.Param("email"))
      if err != nil {
        c.String(404, err.Error())
        return
      }
      c.JSON(200, shops)
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

  productApi := r.Group("/products")
  {
    productApi.GET("/", func(c *gin.Context) {
      products, err := database.GetProducts()
      if err != nil {
        c.String(404, err.Error())
        return
      }
      c.JSON(200, products)
    })
  }

  messageApi := r.Group("/messages")
  {
    messageApi.GET("/", func(c *gin.Context) {
      messages, err := database.GetMessages()
      if err != nil {
        c.String(404, err.Error())
        return
      }
      c.JSON(200, messages)
    })
  }

  err := r.Run(":4201")
  if err != nil {
    return
  }
}
