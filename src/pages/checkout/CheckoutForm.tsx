import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Checkbox from '@/components/ui/checkbox';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  apartment: string;
  city: string;
  country: string;
  state: string;
  zipCode: string;
  phone: string;
  saveInfo: boolean;
};

type CheckoutFormProps = {
  formData: FormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | { target: { name: string; value: string } }) => void;
};

export const CheckoutForm = ({ formData, onChange }: CheckoutFormProps) => {
  const handleSelectChange = (name: string, value: string) => {
    onChange({ target: { name, value } });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    onChange({ target: { name, value: checked } } as any);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First name *</Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={onChange}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last name *</Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={onChange}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email address *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={onChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Street address *</Label>
        <Input
          id="address"
          name="address"
          value={formData.address}
          onChange={onChange}
          placeholder="House number and street name"
          required
        />
        <div className="mt-2">
          <Input
            id="apartment"
            name="apartment"
            value={formData.apartment}
            onChange={onChange}
            placeholder="Apartment, suite, unit, etc. (optional)"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="country">Country *</Label>
          <Select
            value={formData.country}
            onValueChange={(value) => handleSelectChange('country', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="United States">United States</SelectItem>
              <SelectItem value="Canada">Canada</SelectItem>
              <SelectItem value="United Kingdom">United Kingdom</SelectItem>
              <SelectItem value="Australia">Australia</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="state">State/Province *</Label>
          <Input
            id="state"
            name="state"
            value={formData.state}
            onChange={onChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="zipCode">ZIP/Postal code *</Label>
          <Input
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={onChange}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="city">City *</Label>
        <Input
          id="city"
          name="city"
          value={formData.city}
          onChange={onChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone *</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={onChange}
          required
        />
      </div>

      <div className="flex items-center space-x-2 pt-2">
        <Checkbox
          id="saveInfo"
          name="saveInfo"
          checked={formData.saveInfo}
          onCheckedChange={(checked) => 
            onChange({ target: { name: 'saveInfo', value: checked } } as any)
          }
        />
        <label
          htmlFor="saveInfo"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Save this information for next time
        </label>
      </div>
    </div>
  );
};

export default CheckoutForm;
