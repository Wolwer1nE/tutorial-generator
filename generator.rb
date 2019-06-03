lines = File.readlines('doc.txt')
scripts_lines = []
step = 1
lines.each do |line|
  parts = line.split(';')
  scripts_lines.push("$('#{parts[0]}:contains(\"#{parts[1]}\")').siblings(\"input, select \").attr(\"data-intro\", \"#{parts[2]}\").attr(\"data-step\", #{step});")
  step += 1
end
template = File.read('template.txt')
selectors = scripts_lines.join("\n")

File.open('script.js', 'w') do |f|
  f.puts(template.gsub("#SELECTORS_LIST", selectors))
end