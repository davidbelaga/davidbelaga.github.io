puts "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ? Propose un numéro de 1 à 25 :"

puts ">"

etages = gets.chomp.to_i
etage = "" 

while etages > 25
	puts "Recommence : et cette fois-ci, propose bien un chiffre qui est inférieur à 25!"
	puts ">"
etages = gets.chomp.to_i
end

puts "Voici la pyramide :"



etages.times do |i|
	espace = " " * (etages - i) 
	etage = etage + "#"
	puts espace + etage
end
