lines = File.readlines('boundary.txt')
scripts_lines = []
step = 1
lines.each do |line|
  parts = line.split(';')
  scripts_lines.push("let el#{step} = $('#{parts[0]}:contains(\"#{parts[1]}\")');")
  scripts_lines.push("el#{step}.siblings(\"input, select, textarea \").attr(\"data-intro\", \"#{parts[2]}\").attr(\"data-step\", #{step});")
  scripts_lines.push("el#{step}.after( '<span style=\"margin-left: 5px\" title=\"#{parts[2]}\"><i class=\"glyphicon glyphicon-question-sign alert-info\"></i></span>' );")
  step += 1
end
template = File.read('template.txt')
selectors = scripts_lines.join("\n")

File.open('boundaryTutorial.js', 'w') do |f|
  f.puts(template.gsub("#SELECTORS_LIST", selectors))
end
