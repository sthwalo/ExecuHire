export default function Fleet() {
  // For Phase 1, we'll use static data
  const vehicles = [
    {
      id: '1',
      name: 'Mercedes-Benz S-Class',
      image: '/images/fleet/s5.avif',
      price: 'From R2500/day',
      specs: [
        'Luxury Sedan',
        'Automatic Transmission',
        'Premium Sound System',
        'Leather Interior'
      ]
    },
    // ...Add more static vehicles
  ];

  return (
    <div className="container py-12">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold">Our Luxury Fleet</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Experience luxury and performance with our exclusive collection
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vehicle cards will be added in next phase */}
      </div>
    </div>
  );
}
