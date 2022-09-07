puts "🌱 Seeding spices..."
Tender.destroy_all
Apply.destroy_all
User.destroy_all

# Seed your database here
t1= Tender.create(name:"Management", serial: "INV/00052/FTST", description: "Supply goods and services",cost: "2000")
t2= Tender.create(name:"Managers", serial: "INV/00052/FTST", description: "Supply goods and services",cost: "4000")

u1=User.create(name:"Kelvin",email:"Kariuki405@gmail.com")
u2=User.create(name:"Patrick",email:"ruomungai@gmail.com")

a1= Apply.create(user_id: u2.id , tender_id: t1.id)
a2= Apply.create(user_id: u1.id , tender_id: t2.id)

puts "✅ Done seeding!"
