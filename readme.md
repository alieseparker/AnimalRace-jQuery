Forrest Parker

=====AnimalRace-jQuery=====

Create a number of 'animal' objects,
give them different attributes and have them race


Updated all references to jQuery

Upon submit;
  code generates the input elements for the number of animals

I had difficulty deleting elements and kept getting stack overflow errors.

I found out this was due to a recursive call in a function and re-ordered it
so it wouldn't get stuck calling itself.

=====Sources=====
http://oscarotero.com/jquery/
http://stackoverflow.com/