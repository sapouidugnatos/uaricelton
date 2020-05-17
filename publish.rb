print("Commit message:")
commit = gets.chomp

system("torify git add --all")
system("torify git commit -am '#{commit}'")
system("torify git push origin master")