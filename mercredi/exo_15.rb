puts "Entrez votre année de naissance :"
print ">"
annee_de_naissance = gets.chomp.to_i

x = 2019 - annee_de_naissance

x.times do |i|
	a = annee_de_naissance + i
	puts a
	if a < 2018
	puts "En #{a}, tu avais #{i} ans!"
	else
	puts "Maintenant, tu as #{i} ans!"
end
end

 