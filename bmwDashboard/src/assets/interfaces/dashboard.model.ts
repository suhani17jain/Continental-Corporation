export interface AutomobileData{
    purchased_on: Date,
    price: Number,
    quantity: Number,
    request_raised_by:String,
    request_raised_on: Date,
    description:String
}

export interface AutomobileDataItems extends Array<AutomobileData> { }