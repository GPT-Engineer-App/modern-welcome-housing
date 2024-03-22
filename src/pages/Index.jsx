import React from "react";
import { Box, Flex, Heading, Text, Button, Image, Grid, GridItem, Container, Stack, Icon } from "@chakra-ui/react";
import { FaHome, FaQuoteLeft, FaEnvelope, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="white">
      {/* Navigation */}
      <Box bg="yellow.400" py={4}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Heading size="lg" color="black">
              <Icon as={FaHome} mr={2} />
              HomeSales
            </Heading>
            <Stack direction="row" spacing={8}>
              <Button variant="ghost" color="black">
                Properties
              </Button>
              <Button variant="ghost" color="black">
                Testimonials
              </Button>
              <Button variant="ghost" color="black">
                Contact
              </Button>
            </Stack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Flex direction={["column", "row"]} align="center" justify="space-between">
            <Box maxW="lg" mr={[0, 10]}>
              <Heading size="2xl" mb={4}>
                Find Your Dream Home
              </Heading>
              <Text fontSize="xl" mb={8}>
                Discover the perfect home for you and your family. Our expert agents are here to guide you every step of the way.
              </Text>
              <Button colorScheme="yellow" size="lg">
                View Properties
              </Button>
            </Box>
            <Image src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDB8fHx8MTcxMTEwMjc3MHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Modern House" borderRadius="md" />
          </Flex>
        </Container>
      </Box>

      {/* Featured Properties */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading size="xl" mb={10} textAlign="center">
            Featured Properties
          </Heading>
          <Grid templateColumns={["1fr", "repeat(3, 1fr)"]} gap={8}>
            {[1, 2, 3].map((property) => (
              <GridItem key={property}>
                <Box borderWidth={1} borderRadius="md" overflow="hidden">
                  <Image src={`https://images.unsplash.com/photo-1481277542470-605612bd2d61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxob3VzZSUyMGludGVyaW9yJTIwJTI0JTdCcHJvcGVydHklN0R8ZW58MHx8fHwxNzExMTAyNzcxfDA&ixlib=rb-4.0.3&q=80&w=1080`} alt={`Property ${property}`} />
                  <Box p={4}>
                    <Heading size="md" mb={2}>
                      Property {property}
                    </Heading>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                  </Box>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Heading size="xl" mb={10} textAlign="center">
            What Our Customers Say
          </Heading>
          <Grid templateColumns={["1fr", "repeat(2, 1fr)"]} gap={8}>
            {[1, 2].map((testimonial) => (
              <GridItem key={testimonial}>
                <Box bg="white" p={6} borderRadius="md" boxShadow="md">
                  <Icon as={FaQuoteLeft} color="yellow.400" size="3xl" mb={4} />
                  <Text fontSize="lg" mb={4}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna a bibendum bibendum, augue magna tincidunt enim, eget ultricies magna augue eget est."
                  </Text>
                  <Text fontWeight="bold">- Customer {testimonial}</Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Heading size="xl" mb={10} textAlign="center">
            Get In Touch
          </Heading>
          <Grid templateColumns={["1fr", "repeat(3, 1fr)"]} gap={8}>
            <GridItem>
              <Flex align="center">
                <Icon as={FaEnvelope} color="yellow.400" size="2xl" mr={4} />
                <Text>info@homesales.com</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex align="center">
                <Icon as={FaPhone} color="yellow.400" size="2xl" mr={4} />
                <Text>+1 (123) 456-7890</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex align="center">
                <Icon as={FaHome} color="yellow.400" size="2xl" mr={4} />
                <Text>123 Main St, City, Country</Text>
              </Flex>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="black" py={10} color="white">
        <Container maxW="container.lg" textAlign="center">
          <Text>&copy; {new Date().getFullYear()} HomeSales. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
