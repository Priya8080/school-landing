import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, BookOpen, Award, Phone, Mail, MapPin, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SchoolLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <GraduationCap className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">Oakwood Academy</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#programs">
            Programs
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#contact">
            Contact
          </Link>
          <Link className="text-sm font-medium hover:text-blue-600 transition-colors" href="#admissions">
            Admissions
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                    Excellence in Education Since 1985
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Nurturing young minds through innovative learning, character development, and academic excellence.
                    Join our community of learners and discover your potential.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Schedule a Tour
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.9/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>1,200+ Students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    <span>Accredited</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="My Image"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height={400}
                  width={600}
                  src="/image/school.jpg"
                 />

              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Oakwood Academy</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  For nearly four decades, Oakwood Academy has been committed to providing exceptional education that
                  prepares students for success in college, career, and life.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                alt="School campus"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="310"
                src="/placeholder.svg?height=310&width=550"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <BookOpen className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold">Academic Excellence</h3>
                      <p className="text-gray-600">
                        Our rigorous curriculum combines traditional academics with innovative teaching methods,
                        ensuring every student reaches their full potential.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold">Small Class Sizes</h3>
                      <p className="text-gray-600">
                        With an average class size of 18 students, we provide personalized attention and foster
                        meaningful relationships between teachers and students.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Award className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold">Character Development</h3>
                      <p className="text-gray-600">
                        We believe in developing the whole child, emphasizing integrity, leadership, and service to
                        create responsible global citizens.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Programs</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive educational programs designed to meet the diverse needs and interests of our students.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    Elementary Program
                  </CardTitle>
                  <CardDescription>Grades K-5</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Building strong foundations in literacy, numeracy, and critical thinking through hands-on learning
                    and creative exploration.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    Middle School
                  </CardTitle>
                  <CardDescription>Grades 6-8</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Preparing students for high school success with challenging academics, leadership opportunities, and
                    character development.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-blue-600" />
                    High School
                  </CardTitle>
                  <CardDescription>Grades 9-12</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    College preparatory curriculum with AP courses, dual enrollment options, and comprehensive college
                    counseling support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
                  <p className="text-gray-600 md:text-xl">
                    Ready to learn more about Oakwood Academy? We'd love to hear from you. Contact us today to schedule
                    a tour or ask any questions.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span>admissions@oakwoodacademy.edu</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>123 Education Drive, Learning City, LC 12345</span>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
                    <p>Saturday: 9:00 AM - 12:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="first-name" className="text-sm font-medium">
                          First Name
                        </label>
                        <Input id="first-name" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="last-name" className="text-sm font-medium">
                          Last Name
                        </label>
                        <Input id="last-name" placeholder="Enter your last name" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="grade" className="text-sm font-medium">
                        Grade Level of Interest
                      </label>
                      <Input id="grade" placeholder="e.g., Kindergarten, 5th Grade, 9th Grade" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your interest in Oakwood Academy..."
                        className="min-h-[100px]"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Oakwood Academy. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Accessibility
          </Link>
        </nav>
      </footer>
    </div>
  )
}
