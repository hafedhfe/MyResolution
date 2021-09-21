import { Mongo } from 'meteor/mongo';
export const  Resolutions = new Mongo.Collection("resolutions");
 export  const ToolPassword = new Mongo.Collection("toolPassword");
export  const ToolEmail = new Mongo.Collection("toolEmail");

 import SimpleSchema from 'simpl-schema';
export  const Services = new Mongo.Collection("services");
export  const custommers = new Mongo.Collection("custommers");
export  const priceHistory = new Mongo.Collection("priceHistory");
export  const providers = new Mongo.Collection("providers");
export  const prices = new Mongo.Collection("prices");
export  const priceNotifications = new Mongo.Collection("priceNotifications");
export  const availabilityLocProd = new Mongo.Collection("availabilityLocProd");
 
const ServicesSchema = new SimpleSchema({
    
    "city_address":{
        type: String,
        label: "City Address"
    }, 
	"id_provider":{
        type: String,
        label: "Id Provider"
    }, 
	"longitude":{
        type: Number,
        label: "Longitude"
    }, 
	"latitude":{
        type: Number,
        label: "Latitude"
    }
	
});
Services.attachSchema(ServicesSchema);

 const PricesSchema = new SimpleSchema({
     
    "id_provider":{
        type: String,
        label: "Id Provider"
    },

    "id_product":{
        type: String,
        label: "Id Product"
    },
    "price":{
        type: Number,
        label: "Price"
    },
    "currency":{
        type: String(3),
        label: "Currency"
    },
    "url":{
        type: String,
        label: "URL"
    }
    
    });
prices.attachSchema(PricesSchema);

const ProvidersSchema = new SimpleSchema({
   
    "name":{
        type: String,
        label: "Provider Name"
    },
    "address":{
        type: String,
        label: "Adress",
		optional: true
    },
    "email":{
        type: String,
        label: "Email"
    },
    "url_home_page":{
        type: String,
        label: "Home page URL"
    },
    "description":{
        type: String,
        label: "Description"
    }
});
providers.attachSchema(ProvidersSchema);

const CustomersSchema = new SimpleSchema({
   
    "email":{
        type: String,
        label: "Email"
    } 
});
custommers.attachSchema(CustomersSchema);

const AvailabilityLocProdSchema = new SimpleSchema({
    "id_product":{
        type: String,
        label: "Product Id"
    },
    "id_location":{
        type: String,
        label: "Location Id"
    },
	"quantity":{
		type: Number,
        label: "Product Quantity"
	}
});
availabilityLocProd.attachSchema(AvailabilityLocProdSchema);

  const PriceNotificationsSchema = new SimpleSchema({
    "id_user":{
        type: String,
        label: "User Id"
    },
    "id_product":{
        type: String,
        label: "Product Id"
    },
    "price":{
        type: Number,
        label: "Price"
     },
    "currency":{
        type: String(3),
        label: "Currency"
    } 
});
priceNotifications.attachSchema(PriceNotificationsSchema);
  
 const PricehistorySchema = new SimpleSchema({
    "id_provider":{
        type: String,
        label: "Provider Id"
    },
    "id_product":{
        type: String,
        label: "Product Id"
    },
    "price":{
        type: Number,
        label: "Price"
     },
    "currency":{
        type: String(3),
        label: "Currency"
    },
	"date":{
        type: Date,
        
        label: "Price History Date"
    }
});
priceHistory.attachSchema(PricehistorySchema);
  