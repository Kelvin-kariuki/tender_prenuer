puts "🌱 Seeding spices..."
Tender.destroy_all

Company.destroy_all

# Seed your database here
t1= Tender.create(name:"Management", serial: "INV/00052/FTST", description: "Supply goods and services",cost: "2000")
t2= Tender.create(name:"Managers", serial: "INV/00052/FTST", description: "Supply goods and services",cost: "4000")

u1=Company.create(name:"Kelvin",email:"Kariuki405@gmail.com", tender_id:t1.id)
u2=Company.create(name:"Patrick",email:"ruomungai@gmail.com",tender_id:t2.id)



puts "✅ Done seeding!"
