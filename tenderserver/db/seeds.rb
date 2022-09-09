puts "🌱 Seeding spices..."
Tender.destroy_all

Company.destroy_all

# Seed your database here
t1= Tender.create(name:"Maintenance support and licenses for network systems for central bank of Kenya", serial: "INV/00052/FTST", description: "Completed tender documents are to be enclosed in plain sealed envelopes marked with tender reference number and be deposited in the Green Tender Box No. 3 at the main entrance, ground floor of Central Bank of Kenya along Haile Selassie Avenue, so as to be received on or before 4th April 2022 at 10.30 A.M.",cost: "2000")
t2= Tender.create(name:"Supply & Delivery Uninterrupted Power Supply(Ups)", serial: "INV/00052/FTST", description: "Tendering will be conducted under open competitive method (National) using a standardized tender document. Tendering is open to all qualified and interested tenderers. Tenderers will be allowed to tender for one or more items.",cost: "4000")

u1=Company.create(name:"World Vision",email:"Kariuki405@gmail.com", tender_id:t1.id)
u2=Company.create(name:"Kenyatta Hospital",email:"ruomungai@gmail.com",tender_id:t2.id)



puts "✅ Done seeding!"
