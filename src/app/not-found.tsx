import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <Container>
        <div className="max-w-lg mx-auto text-center">
          <p className="font-display text-6xl font-extrabold text-brand-red">404</p>
          <h1 className="mt-4 font-display text-2xl font-bold text-brand-ink">
            Page Not Found
          </h1>
          <p className="mt-4 text-brand-gray leading-relaxed">
            The page you&apos;re looking for seems to have moved, changed or no longer exists.
            You can return to the homepage, explore our services or contact us directly if you
            need help finding the right information.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/">Return Home</Button>
            <Button href="/services" variant="ghost">
              Explore Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
