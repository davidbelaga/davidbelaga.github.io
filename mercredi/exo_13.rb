puts "C'est quoi ton année de naissance?"
print ">"

annee_de_naissance = gets.chomp.to_i

x = 2019 - annee_de_naissance

x.times do |i|
	puts annee_de_naissance + i
end
