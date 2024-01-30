from django.db import models

class Test(models.Model):
  name = models.CharField(max_length=63)

  def __repr__(self):
    return f"[{self.pk}] {self.name}"
  
  def __str__(self):
    return repr(self)