puts "Entrez votre année de naissance :"
print ">"
annee_de_naissance = gets.chomp.to_i

x = 2018 - annee_de_naissance

x.times do |i|
	a = annee_de_naissance + i
	b = x - i


	puts "Il y a #{b} ans, tu avais #{i} ans"

end

