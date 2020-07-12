from setuptools import setup, find_packages

with open('README.rst') as f:
  readme = f.read()

with open('LICENSE') as f:
  license = f.read()

setup(
  name='Mock Server',
  version='0.1.0',
  description='Mock Server for portal',
  long_description=readme,
  author='Roy Gonzalez',
  author_email='yordivad@gmail.com  ',
  url='https://github.com/roygi',
  license=license,
  packages=find_packages(exclude=('tests', 'docs'))
)
