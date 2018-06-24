puts "Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ? Propose un numéro de 1 à 25 :"

puts ">"

etages = gets.chomp.to_i
etage = ""

puts "Voici la pyramide :"

etages.times do |i|
	etage = etage + "#"
	puts etage
end
