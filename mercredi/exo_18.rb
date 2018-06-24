x = 0
liste_email = []
mail = ""


1.upto(9) do |i|
x += 1
mail = "jean.dupont0#{x}@email.fr"
liste_email.push(mail)
end

10.upto(50) do |i|
x += 1
mail = "jean.dupont#{x}@email.fr"
liste_email.push(mail)
end

puts liste_email

